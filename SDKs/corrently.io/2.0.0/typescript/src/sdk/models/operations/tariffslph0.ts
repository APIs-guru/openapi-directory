import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TariffSlph0QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zipcode" })
  zipcode?: string;
}


export class TariffSlph0Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TariffSlph0QueryParams;
}


export class TariffSlph0Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Tariffh0 })
  tariffh0s?: shared.Tariffh0[];
}
