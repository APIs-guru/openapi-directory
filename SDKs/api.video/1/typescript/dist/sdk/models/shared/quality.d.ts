import { SpeakeasyBase } from "../../../internal/utils";
export declare enum QualityQualityEnum {
    TwoHundredAndFortyp = "240p",
    ThreeHundredAndSixtyp = "360p",
    FourHundredAndEightyp = "480p",
    SevenHundredAndTwentyp = "720p",
    OneThousandAndEightyp = "1080p",
    TwoThousandOneHundredAndSixtyp = "2160p"
}
export declare enum QualityStatusEnum {
    Waiting = "waiting",
    Encoding = "encoding",
    Encoded = "encoded",
    Failed = "failed"
}
export declare class Quality extends SpeakeasyBase {
    quality?: QualityQualityEnum;
    status?: QualityStatusEnum;
}
