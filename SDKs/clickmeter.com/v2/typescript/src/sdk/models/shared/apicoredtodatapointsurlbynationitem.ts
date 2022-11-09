import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoDatapointsUrlByNationItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=nation" })
  nation?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
