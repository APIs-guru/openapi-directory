import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserContext } from "./usercontext";
import { UserContext } from "./usercontext";
import { ExperimentSource } from "./experimentsource";


export class DescribeExperimentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=ExperimentArn" })
  experimentArn?: string;

  @Metadata({ data: "json, name=ExperimentName" })
  experimentName?: string;

  @Metadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=Source" })
  source?: ExperimentSource;
}
