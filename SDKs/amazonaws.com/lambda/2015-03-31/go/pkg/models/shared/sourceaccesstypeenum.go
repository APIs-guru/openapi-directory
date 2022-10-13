package shared

type SourceAccessTypeEnum string

const (
	SourceAccessTypeEnumBasicAuth        SourceAccessTypeEnum = "BASIC_AUTH"
	SourceAccessTypeEnumVpcSubnet        SourceAccessTypeEnum = "VPC_SUBNET"
	SourceAccessTypeEnumVpcSecurityGroup SourceAccessTypeEnum = "VPC_SECURITY_GROUP"
	SourceAccessTypeEnumSaslScram512Auth SourceAccessTypeEnum = "SASL_SCRAM_512_AUTH"
	SourceAccessTypeEnumSaslScram256Auth SourceAccessTypeEnum = "SASL_SCRAM_256_AUTH"
	SourceAccessTypeEnumVirtualHost      SourceAccessTypeEnum = "VIRTUAL_HOST"
)
