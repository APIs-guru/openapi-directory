import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BytesRange } from "./bytesrange";

export enum VideostatusIngestStatusEnum {
    Missing = "missing"
,    Uploading = "uploading"
,    Uploaded = "uploaded"
}


// VideostatusIngest
/** 
 * Details about the capturing, transferring, and storing of your video for use immediately or in the future.
**/
export class VideostatusIngest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filesize" })
  filesize?: number;

  @Metadata({ data: "json, name=receivedBytes", elemType: shared.BytesRange })
  receivedBytes?: BytesRange[];

  @Metadata({ data: "json, name=status" })
  status?: VideostatusIngestStatusEnum;
}
