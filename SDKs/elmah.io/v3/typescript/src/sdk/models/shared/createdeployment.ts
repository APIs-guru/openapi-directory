import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDeployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=logId" })
  logId?: string;

  @Metadata({ data: "json, name=userEmail" })
  userEmail?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;

  @Metadata({ data: "json, name=version" })
  version: string;
}
