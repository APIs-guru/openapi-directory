import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DetailScopeEnum {
    Parameter = "Parameter",
    Report = "Report",
    Item = "Item"
}


export class Detail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: DetailScopeEnum;
}
