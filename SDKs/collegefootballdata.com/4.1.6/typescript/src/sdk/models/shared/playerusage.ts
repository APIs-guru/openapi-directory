import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlayerUsageUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstDown" })
  firstDown?: number;

  @Metadata({ data: "json, name=overall" })
  overall?: number;

  @Metadata({ data: "json, name=pass" })
  pass?: number;

  @Metadata({ data: "json, name=passingDowns" })
  passingDowns?: number;

  @Metadata({ data: "json, name=rush" })
  rush?: number;

  @Metadata({ data: "json, name=secondDown" })
  secondDown?: number;

  @Metadata({ data: "json, name=standardDowns" })
  standardDowns?: number;

  @Metadata({ data: "json, name=thirdDown" })
  thirdDown?: number;
}


export class PlayerUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=conference" })
  conference?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=position" })
  position?: string;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=usage" })
  usage?: PlayerUsageUsage;
}
