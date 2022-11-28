import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TerminologyDataFormatEnum } from "./terminologydataformatenum";



export class GetTerminologyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=TerminologyDataFormat" })
  terminologyDataFormat: TerminologyDataFormatEnum;
}
