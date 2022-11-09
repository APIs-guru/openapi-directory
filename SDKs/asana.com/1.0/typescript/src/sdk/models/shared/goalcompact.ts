import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoalCompactOwner extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class GoalCompact extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: GoalCompactOwner;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
