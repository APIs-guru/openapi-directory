import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlayerSeasonPpaAveragePpa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all" })
  all?: number;

  @SpeakeasyMetadata({ data: "json, name=firstDown" })
  firstDown?: number;

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


export class PlayerSeasonPpaTotalPpa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all" })
  all?: number;

  @SpeakeasyMetadata({ data: "json, name=firstDown" })
  firstDown?: number;

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


export class PlayerSeasonPpa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averagePPA" })
  averagePpa?: PlayerSeasonPpaAveragePpa;

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

  @SpeakeasyMetadata({ data: "json, name=totalPPA" })
  totalPpa?: PlayerSeasonPpaTotalPpa;
}
