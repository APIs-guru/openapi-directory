import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IErrorInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=FaultMessage" })
  faultMessage?: string;

  @Metadata({ data: "json, name=Group" })
  group?: string;

  @Metadata({ data: "json, name=UserVisibleMessage" })
  userVisibleMessage?: string;
}
