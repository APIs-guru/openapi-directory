import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContentReferenceAttachment
/** 
 * Content Reference attachments allow you to provide context around URLs posted in comments
**/
export class ContentReferenceAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}
