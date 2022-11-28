import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RecruitHometownInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countyFips" })
  countyFips?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;
}


export class Recruit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=athleteId" })
  athleteId?: number;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=committedTo" })
  committedTo?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=hometownInfo" })
  hometownInfo?: RecruitHometownInfo;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "json, name=ranking" })
  ranking?: number;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: number;

  @SpeakeasyMetadata({ data: "json, name=recruitType" })
  recruitType?: string;

  @SpeakeasyMetadata({ data: "json, name=school" })
  school?: string;

  @SpeakeasyMetadata({ data: "json, name=stars" })
  stars?: number;

  @SpeakeasyMetadata({ data: "json, name=stateProvince" })
  stateProvince?: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
