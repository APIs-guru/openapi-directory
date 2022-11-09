import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserContext } from "./usercontext";
import { UserContext } from "./usercontext";
import { ContextSource } from "./contextsource";


export class DescribeContextResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContextArn" })
  contextArn?: string;

  @Metadata({ data: "json, name=ContextName" })
  contextName?: string;

  @Metadata({ data: "json, name=ContextType" })
  contextType?: string;

  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=Source" })
  source?: ContextSource;
}
