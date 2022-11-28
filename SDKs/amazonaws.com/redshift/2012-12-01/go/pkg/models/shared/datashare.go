package shared

type DataShare struct {
	AllowPubliclyAccessibleConsumers *bool
	DataShareArn                     *string
	DataShareAssociations            []DataShareAssociation
	ProducerArn                      *string
}
