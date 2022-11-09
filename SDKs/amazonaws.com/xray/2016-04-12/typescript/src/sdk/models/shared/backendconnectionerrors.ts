import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BackendConnectionErrors
/** 
 * <p/>
**/
export class BackendConnectionErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionRefusedCount" })
  connectionRefusedCount?: number;

  @Metadata({ data: "json, name=HTTPCode4XXCount" })
  httpCode4XxCount?: number;

  @Metadata({ data: "json, name=HTTPCode5XXCount" })
  httpCode5XxCount?: number;

  @Metadata({ data: "json, name=OtherCount" })
  otherCount?: number;

  @Metadata({ data: "json, name=TimeoutCount" })
  timeoutCount?: number;

  @Metadata({ data: "json, name=UnknownHostCount" })
  unknownHostCount?: number;
}
