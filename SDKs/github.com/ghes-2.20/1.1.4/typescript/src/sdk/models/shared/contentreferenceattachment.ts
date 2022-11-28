import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContentReferenceAttachment
/** 
 * Content Reference attachments allow you to provide context around URLs posted in comments
**/
export class ContentReferenceAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
