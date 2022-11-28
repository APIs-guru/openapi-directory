import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BytesRange } from "./bytesrange";


export enum VideostatusIngestStatusEnum {
    Missing = "missing",
    Uploading = "uploading",
    Uploaded = "uploaded"
}


// VideostatusIngest
/** 
 * Details about the capturing, transferring, and storing of your video for use immediately or in the future.
**/
export class VideostatusIngest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filesize" })
  filesize?: number;

  @SpeakeasyMetadata({ data: "json, name=receivedBytes", elemType: BytesRange })
  receivedBytes?: BytesRange[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: VideostatusIngestStatusEnum;
}
