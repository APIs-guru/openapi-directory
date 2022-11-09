import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// File
/** 
 * File
**/
export class File extends SpeakeasyBase {
  @Metadata({ data: "json, name=$id" })
  dollarId: string;

  @Metadata({ data: "json, name=$permissions" })
  dollarPermissions: Map<string, any>;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated: number;

  @Metadata({ data: "json, name=mimeType" })
  mimeType: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=signature" })
  signature: string;

  @Metadata({ data: "json, name=sizeOriginal" })
  sizeOriginal: number;
}
