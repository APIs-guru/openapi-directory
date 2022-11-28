import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IErrorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=FaultMessage" })
  faultMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=UserVisibleMessage" })
  userVisibleMessage?: string;
}
