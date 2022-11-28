import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductCatalogPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class ProductCatalogSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductCatalogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductCatalogPathParams;

  @SpeakeasyMetadata()
  security: ProductCatalogSecurity;
}


export class ProductCatalogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productCatalog200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  productCatalogDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
