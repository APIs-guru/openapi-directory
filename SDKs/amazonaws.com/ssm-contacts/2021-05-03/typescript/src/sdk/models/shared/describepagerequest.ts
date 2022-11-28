import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PageId" })
  pageId: string;
}
