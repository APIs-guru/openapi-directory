import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribePageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PageId" })
  pageId: string;
}
