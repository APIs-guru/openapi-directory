import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RecruitHometownInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=countyFips" })
  countyFips?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;
}


export class Recruit extends SpeakeasyBase {
  @Metadata({ data: "json, name=athleteId" })
  athleteId?: number;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=committedTo" })
  committedTo?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=hometownInfo" })
  hometownInfo?: RecruitHometownInfo;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=position" })
  position?: string;

  @Metadata({ data: "json, name=ranking" })
  ranking?: number;

  @Metadata({ data: "json, name=rating" })
  rating?: number;

  @Metadata({ data: "json, name=recruitType" })
  recruitType?: string;

  @Metadata({ data: "json, name=school" })
  school?: string;

  @Metadata({ data: "json, name=stars" })
  stars?: number;

  @Metadata({ data: "json, name=stateProvince" })
  stateProvince?: string;

  @Metadata({ data: "json, name=weight" })
  weight?: number;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
