import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TerminologyDataFormatEnum } from "./terminologydataformatenum";


export class GetTerminologyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=TerminologyDataFormat" })
  terminologyDataFormat: TerminologyDataFormatEnum;
}
