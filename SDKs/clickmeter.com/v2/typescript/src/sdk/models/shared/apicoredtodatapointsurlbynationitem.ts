import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreDtoDatapointsUrlByNationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nation" })
  nation?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
