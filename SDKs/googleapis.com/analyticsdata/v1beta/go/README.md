# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.AnalyticsdataPropertiesBatchRunPivotReportsRequest{
        Security: operations.AnalyticsdataPropertiesBatchRunPivotReportsSecurity{
            Option1: &operations.AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.AnalyticsdataPropertiesBatchRunPivotReportsPathParams{
            Property: "numquam",
        },
        QueryParams: operations.AnalyticsdataPropertiesBatchRunPivotReportsQueryParams{
            DollarXgafv: "2",
            AccessToken: "et",
            Alt: "json",
            Callback: "excepturi",
            Fields: "odit",
            Key: "voluptas",
            OauthToken: "illo",
            PrettyPrint: true,
            QuotaUser: "odit",
            UploadType: "et",
            UploadProtocol: "perferendis",
        },
        Request: &shared.BatchRunPivotReportsRequest{
            Requests: []shared.RunPivotReportRequest{
                shared.RunPivotReportRequest{
                    CohortSpec: &shared.CohortSpec{
                        CohortReportSettings: &shared.CohortReportSettings{
                            Accumulate: false,
                        },
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "porro",
                                    Name: "et",
                                    StartDate: "maiores",
                                },
                                Dimension: "sed",
                                Name: "recusandae",
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: 3302332600328048071,
                            Granularity: "GRANULARITY_UNSPECIFIED",
                            StartOffset: 3562849057074415581,
                        },
                    },
                    CurrencyCode: "beatae",
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "corporis",
                            Name: "ea",
                            StartDate: "sunt",
                        },
                        shared.DateRange{
                            EndDate: "eveniet",
                            Name: "maxime",
                            StartDate: "expedita",
                        },
                        shared.DateRange{
                            EndDate: "neque",
                            Name: "est",
                            StartDate: "ad",
                        },
                    },
                    DimensionFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 52.200001,
                                    Int64Value: "ducimus",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 5.100000,
                                    Int64Value: "sit",
                                },
                            },
                            FieldName: "voluptatem",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: true,
                                Values: []string{
                                    "quisquam",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "GREATER_THAN_OR_EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 12.200000,
                                    Int64Value: "voluptatibus",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "ENDS_WITH",
                                Value: "sed",
                            },
                        },
                        NotExpression: &shared.FilterExpression{
                        
                        },
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "nulla",
                                    DimensionNames: []string{
                                        "magnam",
                                        "dolores",
                                        "vel",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "consequatur",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "aperiam",
                                },
                            },
                            Name: "rerum",
                        },
                    },
                    KeepEmptyRows: false,
                    MetricFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 7.200000,
                                    Int64Value: "nesciunt",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 74.099998,
                                    Int64Value: "sequi",
                                },
                            },
                            FieldName: "voluptas",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "similique",
                                    "facilis",
                                    "sit",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "GREATER_THAN_OR_EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 7.200000,
                                    Int64Value: "voluptatum",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: true,
                                MatchType: "PARTIAL_REGEXP",
                                Value: "illum",
                            },
                        },
                        NotExpression: &shared.FilterExpression{
                        
                        },
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Expression: "magni",
                            Invisible: true,
                            Name: "ratione",
                        },
                        shared.Metric{
                            Expression: "velit",
                            Invisible: true,
                            Name: "magni",
                        },
                        shared.Metric{
                            Expression: "repellat",
                            Invisible: true,
                            Name: "animi",
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "sequi",
                            },
                            Limit: "voluptatibus",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "TOTAL",
                                "COUNT",
                            },
                            Offset: "rerum",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "omnis",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "quisquam",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "maxime",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "eaque",
                                                DimensionValue: "voluptatibus",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: true,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "iure",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "quo",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "qui",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "vitae",
                                                DimensionValue: "minus",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "recusandae",
                                                DimensionValue: "ut",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "tenetur",
                                                DimensionValue: "eius",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "sit",
                            },
                            Limit: "doloribus",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "TOTAL",
                                "MAXIMUM",
                            },
                            Offset: "saepe",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: true,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "ut",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "fugiat",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "sit",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "velit",
                                                DimensionValue: "qui",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "quod",
                                                DimensionValue: "dignissimos",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "fugit",
                                                DimensionValue: "non",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: true,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "eveniet",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "quam",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "molestiae",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "et",
                                                DimensionValue: "aut",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "perspiciatis",
                                        OrderType: "ORDER_TYPE_UNSPECIFIED",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "quis",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "tempora",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "in",
                                                DimensionValue: "dicta",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "explicabo",
                            },
                            Limit: "molestiae",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "MAXIMUM",
                                "METRIC_AGGREGATION_UNSPECIFIED",
                            },
                            Offset: "eaque",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: true,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "unde",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "iusto",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "quas",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "dignissimos",
                                                DimensionValue: "vel",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "omnis",
                                                DimensionValue: "rerum",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "quasi",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "ratione",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "aliquam",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "sint",
                                                DimensionValue: "deserunt",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "et",
                                                DimensionValue: "magnam",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: "ad",
                    ReturnPropertyQuota: true,
                },
                shared.RunPivotReportRequest{
                    CohortSpec: &shared.CohortSpec{
                        CohortReportSettings: &shared.CohortReportSettings{
                            Accumulate: false,
                        },
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "minima",
                                    Name: "rerum",
                                    StartDate: "aut",
                                },
                                Dimension: "fugiat",
                                Name: "facere",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "non",
                                    Name: "consectetur",
                                    StartDate: "eum",
                                },
                                Dimension: "repellendus",
                                Name: "inventore",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "est",
                                    Name: "sunt",
                                    StartDate: "recusandae",
                                },
                                Dimension: "reprehenderit",
                                Name: "ut",
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: 2385751255956319642,
                            Granularity: "GRANULARITY_UNSPECIFIED",
                            StartOffset: 4173885397853267836,
                        },
                    },
                    CurrencyCode: "aut",
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "laborum",
                            Name: "magnam",
                            StartDate: "praesentium",
                        },
                    },
                    DimensionFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 73.199997,
                                    Int64Value: "iste",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 4.200000,
                                    Int64Value: "consequatur",
                                },
                            },
                            FieldName: "quam",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "architecto",
                                    "ut",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "LESS_THAN_OR_EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 45.200001,
                                    Int64Value: "et",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: true,
                                MatchType: "MATCH_TYPE_UNSPECIFIED",
                                Value: "minima",
                            },
                        },
                        NotExpression: &shared.FilterExpression{
                        
                        },
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "mollitia",
                                    DimensionNames: []string{
                                        "autem",
                                        "sunt",
                                        "consequuntur",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "est",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "dicta",
                                },
                            },
                            Name: "asperiores",
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "saepe",
                                    DimensionNames: []string{
                                        "quidem",
                                        "reprehenderit",
                                        "repudiandae",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "consectetur",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "fugit",
                                },
                            },
                            Name: "illum",
                        },
                    },
                    KeepEmptyRows: false,
                    MetricFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 21.100000,
                                    Int64Value: "natus",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 59.099998,
                                    Int64Value: "consequatur",
                                },
                            },
                            FieldName: "quia",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: true,
                                Values: []string{
                                    "numquam",
                                    "autem",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 48.200001,
                                    Int64Value: "modi",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: true,
                                MatchType: "FULL_REGEXP",
                                Value: "autem",
                            },
                        },
                        NotExpression: &shared.FilterExpression{
                        
                        },
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Expression: "illo",
                            Invisible: true,
                            Name: "corrupti",
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "aut",
                                "enim",
                                "et",
                            },
                            Limit: "provident",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "METRIC_AGGREGATION_UNSPECIFIED",
                                "MINIMUM",
                            },
                            Offset: "necessitatibus",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: true,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "nisi",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "consequatur",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "quo",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "voluptatem",
                                                DimensionValue: "fuga",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "soluta",
                                        OrderType: "ORDER_TYPE_UNSPECIFIED",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "ea",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "tempora",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "assumenda",
                                                DimensionValue: "voluptatibus",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "dolorem",
                                                DimensionValue: "ea",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "adipisci",
                                "enim",
                                "deserunt",
                            },
                            Limit: "necessitatibus",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "TOTAL",
                                "METRIC_AGGREGATION_UNSPECIFIED",
                                "MAXIMUM",
                            },
                            Offset: "commodi",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: true,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "voluptatum",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "velit",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "ex",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "eligendi",
                                                DimensionValue: "voluptatem",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: "eaque",
                    ReturnPropertyQuota: false,
                },
                shared.RunPivotReportRequest{
                    CohortSpec: &shared.CohortSpec{
                        CohortReportSettings: &shared.CohortReportSettings{
                            Accumulate: true,
                        },
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "dignissimos",
                                    Name: "doloremque",
                                    StartDate: "odio",
                                },
                                Dimension: "et",
                                Name: "beatae",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "occaecati",
                                    Name: "autem",
                                    StartDate: "quod",
                                },
                                Dimension: "quidem",
                                Name: "culpa",
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: 7688557147229530410,
                            Granularity: "MONTHLY",
                            StartOffset: 7180476382161094759,
                        },
                    },
                    CurrencyCode: "autem",
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "ducimus",
                            Name: "sunt",
                            StartDate: "aut",
                        },
                        shared.DateRange{
                            EndDate: "molestiae",
                            Name: "architecto",
                            StartDate: "alias",
                        },
                        shared.DateRange{
                            EndDate: "et",
                            Name: "suscipit",
                            StartDate: "unde",
                        },
                    },
                    DimensionFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 97.099998,
                                    Int64Value: "aspernatur",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 49.099998,
                                    Int64Value: "sed",
                                },
                            },
                            FieldName: "non",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "assumenda",
                                    "neque",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "GREATER_THAN",
                                Value: &shared.NumericValue{
                                    DoubleValue: 27.200001,
                                    Int64Value: "molestiae",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "FULL_REGEXP",
                                Value: "occaecati",
                            },
                        },
                        NotExpression: &shared.FilterExpression{
                        
                        },
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "fuga",
                                    DimensionNames: []string{
                                        "totam",
                                        "libero",
                                        "eligendi",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "id",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "aperiam",
                                },
                            },
                            Name: "cum",
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "assumenda",
                                    DimensionNames: []string{
                                        "omnis",
                                        "commodi",
                                        "doloremque",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "quis",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "iste",
                                },
                            },
                            Name: "molestias",
                        },
                    },
                    KeepEmptyRows: true,
                    MetricFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 40.099998,
                                    Int64Value: "omnis",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 18.200001,
                                    Int64Value: "quo",
                                },
                            },
                            FieldName: "quo",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "laborum",
                                    "incidunt",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "GREATER_THAN",
                                Value: &shared.NumericValue{
                                    DoubleValue: 3.100000,
                                    Int64Value: "quas",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "CONTAINS",
                                Value: "temporibus",
                            },
                        },
                        NotExpression: &shared.FilterExpression{
                        
                        },
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Expression: "id",
                            Invisible: false,
                            Name: "facere",
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "illo",
                            },
                            Limit: "ut",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "COUNT",
                                "MAXIMUM",
                                "COUNT",
                            },
                            Offset: "non",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: true,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "aut",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "suscipit",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "et",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "eos",
                                                DimensionValue: "autem",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "qui",
                                                DimensionValue: "vel",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "quo",
                                                DimensionValue: "minus",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "id",
                            },
                            Limit: "molestias",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "MAXIMUM",
                            },
                            Offset: "quam",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "quae",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "omnis",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "ut",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "libero",
                                                DimensionValue: "quaerat",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "ut",
                                                DimensionValue: "sed",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "nesciunt",
                            },
                            Limit: "incidunt",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "MAXIMUM",
                                "METRIC_AGGREGATION_UNSPECIFIED",
                                "MINIMUM",
                            },
                            Offset: "aut",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "tenetur",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "cum",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "illum",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "et",
                                                DimensionValue: "quia",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: true,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "enim",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "odio",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "velit",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "est",
                                                DimensionValue: "ipsam",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "ut",
                                                DimensionValue: "quod",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: "dolor",
                    ReturnPropertyQuota: true,
                },
            },
        },
    }
    
    res, err := s.Properties.AnalyticsdataPropertiesBatchRunPivotReports(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchRunPivotReportsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### properties

* `AnalyticsdataPropertiesBatchRunPivotReports` - Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.
* `AnalyticsdataPropertiesBatchRunReports` - Returns multiple reports in a batch. All reports must be for the same GA4 Property.
* `AnalyticsdataPropertiesCheckCompatibility` - This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.
* `AnalyticsdataPropertiesGetMetadata` - Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.
* `AnalyticsdataPropertiesRunPivotReport` - Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.
* `AnalyticsdataPropertiesRunRealtimeReport` - Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).
* `AnalyticsdataPropertiesRunReport` - Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
