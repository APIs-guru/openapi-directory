package shared

type QualityQualityEnum string

const (
	QualityQualityEnumTwoHundredAndFortyp            QualityQualityEnum = "240p"
	QualityQualityEnumThreeHundredAndSixtyp          QualityQualityEnum = "360p"
	QualityQualityEnumFourHundredAndEightyp          QualityQualityEnum = "480p"
	QualityQualityEnumSevenHundredAndTwentyp         QualityQualityEnum = "720p"
	QualityQualityEnumOneThousandAndEightyp          QualityQualityEnum = "1080p"
	QualityQualityEnumTwoThousandOneHundredAndSixtyp QualityQualityEnum = "2160p"
)

type QualityStatusEnum string

const (
	QualityStatusEnumWaiting  QualityStatusEnum = "waiting"
	QualityStatusEnumEncoding QualityStatusEnum = "encoding"
	QualityStatusEnumEncoded  QualityStatusEnum = "encoded"
	QualityStatusEnumFailed   QualityStatusEnum = "failed"
)

type Quality struct {
	Quality *QualityQualityEnum `json:"quality,omitempty"`
	Status  *QualityStatusEnum  `json:"status,omitempty"`
}
