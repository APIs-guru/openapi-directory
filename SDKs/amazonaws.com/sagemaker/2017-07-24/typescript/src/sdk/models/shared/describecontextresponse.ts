import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { ContextSource } from "./contextsource";



export class DescribeContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContextArn" })
  contextArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ContextName" })
  contextName?: string;

  @SpeakeasyMetadata({ data: "json, name=ContextType" })
  contextType?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: ContextSource;
}
