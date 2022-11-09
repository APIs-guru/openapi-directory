import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductCatalogPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class ProductCatalogSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductCatalogRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductCatalogPathParams;

  @Metadata()
  security: ProductCatalogSecurity;
}


export class ProductCatalogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productCatalog200ApplicationJsonAny?: any;

  @Metadata()
  productCatalogDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
