import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentPermissionTypeEnum } from "./documentpermissiontypeenum";


export class DescribeDocumentPermissionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PermissionType" })
  permissionType: DocumentPermissionTypeEnum;
}
