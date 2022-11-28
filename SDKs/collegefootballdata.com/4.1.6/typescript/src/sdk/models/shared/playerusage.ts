import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlayerUsageUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstDown" })
  firstDown?: number;

  @SpeakeasyMetadata({ data: "json, name=overall" })
  overall?: number;

  @SpeakeasyMetadata({ data: "json, name=pass" })
  pass?: number;

  @SpeakeasyMetadata({ data: "json, name=passingDowns" })
  passingDowns?: number;

  @SpeakeasyMetadata({ data: "json, name=rush" })
  rush?: number;

  @SpeakeasyMetadata({ data: "json, name=secondDown" })
  secondDown?: number;

  @SpeakeasyMetadata({ data: "json, name=standardDowns" })
  standardDowns?: number;

  @SpeakeasyMetadata({ data: "json, name=thirdDown" })
  thirdDown?: number;
}


export class PlayerUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: PlayerUsageUsage;
}
