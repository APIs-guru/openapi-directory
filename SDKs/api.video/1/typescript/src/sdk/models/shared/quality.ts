import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum QualityQualityEnum {
    TwoHundredAndFortyp = "240p"
,    ThreeHundredAndSixtyp = "360p"
,    FourHundredAndEightyp = "480p"
,    SevenHundredAndTwentyp = "720p"
,    OneThousandAndEightyp = "1080p"
,    TwoThousandOneHundredAndSixtyp = "2160p"
}

export enum QualityStatusEnum {
    Waiting = "waiting"
,    Encoding = "encoding"
,    Encoded = "encoded"
,    Failed = "failed"
}


export class Quality extends SpeakeasyBase {
  @Metadata({ data: "json, name=quality" })
  quality?: QualityQualityEnum;

  @Metadata({ data: "json, name=status" })
  status?: QualityStatusEnum;
}
