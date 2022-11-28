import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BackendConnectionErrors
/** 
 * <p/>
**/
export class BackendConnectionErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionRefusedCount" })
  connectionRefusedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=HTTPCode4XXCount" })
  httpCode4XxCount?: number;

  @SpeakeasyMetadata({ data: "json, name=HTTPCode5XXCount" })
  httpCode5XxCount?: number;

  @SpeakeasyMetadata({ data: "json, name=OtherCount" })
  otherCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TimeoutCount" })
  timeoutCount?: number;

  @SpeakeasyMetadata({ data: "json, name=UnknownHostCount" })
  unknownHostCount?: number;
}
