package shared

type PortfolioShareTypeEnum string

const (
	PortfolioShareTypeEnumImported          PortfolioShareTypeEnum = "IMPORTED"
	PortfolioShareTypeEnumAwsServicecatalog PortfolioShareTypeEnum = "AWS_SERVICECATALOG"
	PortfolioShareTypeEnumAwsOrganizations  PortfolioShareTypeEnum = "AWS_ORGANIZATIONS"
)
