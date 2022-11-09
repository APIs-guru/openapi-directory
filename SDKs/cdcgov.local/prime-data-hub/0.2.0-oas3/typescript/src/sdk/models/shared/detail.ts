import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DetailScopeEnum {
    Parameter = "Parameter"
,    Report = "Report"
,    Item = "Item"
}


export class Detail extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: DetailScopeEnum;
}
