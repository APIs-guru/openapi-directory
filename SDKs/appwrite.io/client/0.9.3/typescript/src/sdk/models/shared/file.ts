import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// File
/** 
 * File
**/
export class File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$id" })
  dollarId: string;

  @SpeakeasyMetadata({ data: "json, name=$permissions" })
  dollarPermissions: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated: number;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "json, name=sizeOriginal" })
  sizeOriginal: number;
}
