import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomPluginStateEnum } from "./custompluginstateenum";
import { CustomPluginRevisionSummary } from "./custompluginrevisionsummary";


export class DescribeCustomPluginResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=customPluginArn" })
  customPluginArn?: string;

  @Metadata({ data: "json, name=customPluginState" })
  customPluginState?: CustomPluginStateEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=latestRevision" })
  latestRevision?: CustomPluginRevisionSummary;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
