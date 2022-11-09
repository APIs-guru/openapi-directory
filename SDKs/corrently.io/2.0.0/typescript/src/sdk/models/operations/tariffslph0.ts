import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TariffSlph0QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=zipcode" })
  zipcode?: string;
}


export class TariffSlph0Request extends SpeakeasyBase {
  @Metadata()
  queryParams: TariffSlph0QueryParams;
}


export class TariffSlph0Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Tariffh0 })
  tariffh0s?: shared.Tariffh0[];
}
