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
    
    req := operations.AnalyticsreportingReportsBatchGetRequest{
        Security: operations.AnalyticsreportingReportsBatchGetSecurity{
            Option1: &operations.AnalyticsreportingReportsBatchGetSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        QueryParams: operations.AnalyticsreportingReportsBatchGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "dolor",
            Alt: "media",
            Callback: "eius",
            Fields: "minus",
            Key: "eaque",
            OauthToken: "ut",
            PrettyPrint: true,
            QuotaUser: "reiciendis",
            UploadType: "doloribus",
            UploadProtocol: "in",
        },
        Request: &shared.GetReportsRequest{
            ReportRequests: []shared.ReportRequest{
                shared.ReportRequest{
                    CohortGroup: &shared.CohortGroup{
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "eius",
                                    StartDate: "ab",
                                },
                                Name: "et",
                                Type: "UNSPECIFIED_COHORT_TYPE",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "ut",
                                    StartDate: "ut",
                                },
                                Name: "ea",
                                Type: "UNSPECIFIED_COHORT_TYPE",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "velit",
                                    StartDate: "et",
                                },
                                Name: "doloribus",
                                Type: "FIRST_VISIT_DATE",
                            },
                        },
                        LifetimeValue: true,
                    },
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "voluptates",
                            StartDate: "praesentium",
                        },
                    },
                    DimensionFilterClauses: []shared.DimensionFilterClause{
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "consequatur",
                                    Expressions: []string{
                                        "quas",
                                    },
                                    Not: false,
                                    Operator: "ENDS_WITH",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "non",
                                    Expressions: []string{
                                        "eum",
                                    },
                                    Not: true,
                                    Operator: "EXACT",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "minima",
                                    Expressions: []string{
                                        "vel",
                                        "voluptatem",
                                        "repellendus",
                                    },
                                    Not: false,
                                    Operator: "ENDS_WITH",
                                },
                            },
                            Operator: "AND",
                        },
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "modi",
                                    Expressions: []string{
                                        "porro",
                                        "rerum",
                                    },
                                    Not: true,
                                    Operator: "NUMERIC_GREATER_THAN",
                                },
                            },
                            Operator: "OR",
                        },
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "natus",
                                    Expressions: []string{
                                        "error",
                                    },
                                    Not: true,
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "provident",
                                    Expressions: []string{
                                        "ut",
                                    },
                                    Not: true,
                                    Operator: "NUMERIC_GREATER_THAN",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "voluptatem",
                                    Expressions: []string{
                                        "quam",
                                    },
                                    Not: false,
                                    Operator: "REGEXP",
                                },
                            },
                            Operator: "OPERATOR_UNSPECIFIED",
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "maiores",
                                "qui",
                            },
                            Name: "dolorum",
                        },
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "sed",
                                "excepturi",
                            },
                            Name: "voluptatibus",
                        },
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "consectetur",
                            },
                            Name: "aperiam",
                        },
                    },
                    FiltersExpression: "aspernatur",
                    HideTotals: false,
                    HideValueRanges: false,
                    IncludeEmptyRows: false,
                    MetricFilterClauses: []shared.MetricFilterClause{
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: "unde",
                                    MetricName: "accusantium",
                                    Not: true,
                                    Operator: "GREATER_THAN",
                                },
                                shared.MetricFilter{
                                    ComparisonValue: "repudiandae",
                                    MetricName: "voluptas",
                                    Not: true,
                                    Operator: "LESS_THAN",
                                },
                            },
                            Operator: "OPERATOR_UNSPECIFIED",
                        },
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: "eum",
                                    MetricName: "ut",
                                    Not: false,
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                                shared.MetricFilter{
                                    ComparisonValue: "doloribus",
                                    MetricName: "dolore",
                                    Not: true,
                                    Operator: "GREATER_THAN",
                                },
                            },
                            Operator: "OR",
                        },
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: "occaecati",
                                    MetricName: "fugiat",
                                    Not: false,
                                    Operator: "GREATER_THAN",
                                },
                            },
                            Operator: "AND",
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Alias: "harum",
                            Expression: "aut",
                            FormattingType: "CURRENCY",
                        },
                    },
                    OrderBys: []shared.OrderBy{
                        shared.OrderBy{
                            FieldName: "omnis",
                            OrderType: "DIMENSION_AS_INTEGER",
                            SortOrder: "DESCENDING",
                        },
                        shared.OrderBy{
                            FieldName: "nemo",
                            OrderType: "DELTA",
                            SortOrder: "DESCENDING",
                        },
                    },
                    PageSize: 8363872708664577317,
                    PageToken: "dolor",
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "iusto",
                                            Expressions: []string{
                                                "quos",
                                                "est",
                                                "similique",
                                            },
                                            Not: true,
                                            Operator: "IN_LIST",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "officia",
                                            Expressions: []string{
                                                "at",
                                            },
                                            Not: false,
                                            Operator: "REGEXP",
                                        },
                                    },
                                    Operator: "OR",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "atque",
                                        "tempore",
                                        "ex",
                                    },
                                    Name: "rem",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "corrupti",
                                        "at",
                                    },
                                    Name: "natus",
                                },
                            },
                            MaxGroupCount: 1929143766071761731,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "et",
                                    Expression: "deleniti",
                                    FormattingType: "CURRENCY",
                                },
                            },
                            StartGroup: 407870844475907848,
                        },
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "maiores",
                                            Expressions: []string{
                                                "non",
                                                "quo",
                                            },
                                            Not: true,
                                            Operator: "NUMERIC_EQUAL",
                                        },
                                    },
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "accusamus",
                                            Expressions: []string{
                                                "enim",
                                            },
                                            Not: true,
                                            Operator: "IN_LIST",
                                        },
                                    },
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "excepturi",
                                    },
                                    Name: "quia",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "totam",
                                        "animi",
                                        "illum",
                                    },
                                    Name: "ea",
                                },
                            },
                            MaxGroupCount: 3468176560740997316,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "repellat",
                                    Expression: "ea",
                                    FormattingType: "CURRENCY",
                                },
                            },
                            StartGroup: 7411902161399948188,
                        },
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "vero",
                                            Expressions: []string{
                                                "atque",
                                                "placeat",
                                            },
                                            Not: false,
                                            Operator: "OPERATOR_UNSPECIFIED",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "enim",
                                            Expressions: []string{
                                                "molestias",
                                            },
                                            Not: true,
                                            Operator: "PARTIAL",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "inventore",
                                            Expressions: []string{
                                                "enim",
                                            },
                                            Not: false,
                                            Operator: "PARTIAL",
                                        },
                                    },
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "quia",
                                            Expressions: []string{
                                                "porro",
                                            },
                                            Not: true,
                                            Operator: "NUMERIC_LESS_THAN",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "placeat",
                                            Expressions: []string{
                                                "quia",
                                                "et",
                                            },
                                            Not: false,
                                            Operator: "NUMERIC_GREATER_THAN",
                                        },
                                    },
                                    Operator: "OR",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "saepe",
                                            Expressions: []string{
                                                "itaque",
                                                "dignissimos",
                                            },
                                            Not: true,
                                            Operator: "PARTIAL",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "ut",
                                            Expressions: []string{
                                                "et",
                                                "enim",
                                                "sapiente",
                                            },
                                            Not: true,
                                            Operator: "OPERATOR_UNSPECIFIED",
                                        },
                                    },
                                    Operator: "AND",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "aut",
                                        "dolorem",
                                        "nisi",
                                    },
                                    Name: "quod",
                                },
                            },
                            MaxGroupCount: 6215984325955635864,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "blanditiis",
                                    Expression: "et",
                                    FormattingType: "FLOAT",
                                },
                                shared.Metric{
                                    Alias: "facere",
                                    Expression: "et",
                                    FormattingType: "FLOAT",
                                },
                            },
                            StartGroup: 7567746428576195883,
                        },
                    },
                    SamplingLevel: "SMALL",
                    Segments: []shared.Segment{
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: "voluptatum",
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: false,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: false,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "suscipit",
                                                                            Expressions: []string{
                                                                                "eaque",
                                                                                "nihil",
                                                                            },
                                                                            MaxComparisonValue: "sint",
                                                                            MinComparisonValue: "natus",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sunt",
                                                                            MaxComparisonValue: "quam",
                                                                            MetricName: "nesciunt",
                                                                            Operator: "EQUAL",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "atque",
                                                                            Expressions: []string{
                                                                                "suscipit",
                                                                            },
                                                                            MaxComparisonValue: "repudiandae",
                                                                            MinComparisonValue: "modi",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "expedita",
                                                                            MaxComparisonValue: "in",
                                                                            MetricName: "aut",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "voluptas",
                                                                                "facilis",
                                                                                "quos",
                                                                            },
                                                                            MaxComparisonValue: "sapiente",
                                                                            MinComparisonValue: "beatae",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "vitae",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "molestiae",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "deleniti",
                                                                            Expressions: []string{
                                                                                "consequuntur",
                                                                                "officia",
                                                                            },
                                                                            MaxComparisonValue: "repellat",
                                                                            MinComparisonValue: "esse",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "est",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "ab",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "rem",
                                                                    Expressions: []string{
                                                                        "quisquam",
                                                                        "sunt",
                                                                    },
                                                                    MaxComparisonValue: "nam",
                                                                    MinComparisonValue: "omnis",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "cupiditate",
                                                                    MaxComparisonValue: "omnis",
                                                                    MetricName: "dolores",
                                                                    Operator: "EQUAL",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "quia",
                                                                    Expressions: []string{
                                                                        "ipsum",
                                                                        "vel",
                                                                        "repellendus",
                                                                    },
                                                                    MaxComparisonValue: "autem",
                                                                    MinComparisonValue: "vel",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "repudiandae",
                                                                    MaxComparisonValue: "voluptas",
                                                                    MetricName: "omnis",
                                                                    Operator: "EQUAL",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "aspernatur",
                                                                    Expressions: []string{
                                                                        "occaecati",
                                                                        "porro",
                                                                    },
                                                                    MaxComparisonValue: "dicta",
                                                                    MinComparisonValue: "cupiditate",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "est",
                                                                    MaxComparisonValue: "nemo",
                                                                    MetricName: "eos",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "id",
                                                                    Expressions: []string{
                                                                        "ipsam",
                                                                    },
                                                                    MaxComparisonValue: "nihil",
                                                                    MinComparisonValue: "vel",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "voluptas",
                                                                    MaxComparisonValue: "ipsam",
                                                                    MetricName: "est",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "sunt",
                                                                    Expressions: []string{
                                                                        "voluptate",
                                                                        "omnis",
                                                                        "hic",
                                                                    },
                                                                    MaxComparisonValue: "voluptatem",
                                                                    MinComparisonValue: "eaque",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "nesciunt",
                                                                    MaxComparisonValue: "voluptas",
                                                                    MetricName: "non",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "deleniti",
                                                                    Expressions: []string{
                                                                        "modi",
                                                                    },
                                                                    MaxComparisonValue: "quis",
                                                                    MinComparisonValue: "id",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "dolorum",
                                                                    MaxComparisonValue: "repellat",
                                                                    MetricName: "nihil",
                                                                    Operator: "EQUAL",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "aut",
                                                                    Expressions: []string{
                                                                        "porro",
                                                                        "reprehenderit",
                                                                        "magni",
                                                                    },
                                                                    MaxComparisonValue: "ab",
                                                                    MinComparisonValue: "eligendi",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "qui",
                                                                    MaxComparisonValue: "omnis",
                                                                    MetricName: "ut",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                UserSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: true,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: false,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "accusamus",
                                                                            Expressions: []string{
                                                                                "aut",
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "dicta",
                                                                            MinComparisonValue: "est",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptatum",
                                                                            MaxComparisonValue: "qui",
                                                                            MetricName: "odit",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "sint",
                                                                            Expressions: []string{
                                                                                "rem",
                                                                                "quod",
                                                                                "quia",
                                                                            },
                                                                            MaxComparisonValue: "magni",
                                                                            MinComparisonValue: "enim",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ut",
                                                                            MaxComparisonValue: "dicta",
                                                                            MetricName: "iusto",
                                                                            Operator: "EQUAL",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "sint",
                                                                            Expressions: []string{
                                                                                "omnis",
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "sed",
                                                                            MinComparisonValue: "exercitationem",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ipsa",
                                                                            MaxComparisonValue: "delectus",
                                                                            MetricName: "eos",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "est",
                                                                            Expressions: []string{
                                                                                "saepe",
                                                                            },
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MinComparisonValue: "corporis",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "inventore",
                                                                            MaxComparisonValue: "repellat",
                                                                            MetricName: "ullam",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "nihil",
                                                                            Expressions: []string{
                                                                                "esse",
                                                                            },
                                                                            MaxComparisonValue: "eum",
                                                                            MinComparisonValue: "pariatur",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "autem",
                                                                            MaxComparisonValue: "perferendis",
                                                                            MetricName: "aperiam",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "aspernatur",
                                                                            Expressions: []string{
                                                                                "maxime",
                                                                            },
                                                                            MaxComparisonValue: "voluptas",
                                                                            MinComparisonValue: "facere",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sit",
                                                                            MaxComparisonValue: "eveniet",
                                                                            MetricName: "reiciendis",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "rerum",
                                                                            Expressions: []string{
                                                                                "saepe",
                                                                            },
                                                                            MaxComparisonValue: "aut",
                                                                            MinComparisonValue: "quod",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "quasi",
                                                                            MetricName: "dolores",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "aliquam",
                                                                    Expressions: []string{
                                                                        "ut",
                                                                        "id",
                                                                        "dolore",
                                                                    },
                                                                    MaxComparisonValue: "qui",
                                                                    MinComparisonValue: "voluptates",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ab",
                                                                    MaxComparisonValue: "qui",
                                                                    MetricName: "alias",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "voluptatem",
                                                                    Expressions: []string{
                                                                        "soluta",
                                                                        "est",
                                                                    },
                                                                    MaxComparisonValue: "quam",
                                                                    MinComparisonValue: "accusamus",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "iure",
                                                                    MaxComparisonValue: "quisquam",
                                                                    MetricName: "cumque",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "in",
                                                                    Expressions: []string{
                                                                        "et",
                                                                        "et",
                                                                    },
                                                                    MaxComparisonValue: "labore",
                                                                    MinComparisonValue: "sed",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "sunt",
                                                                    MaxComparisonValue: "et",
                                                                    MetricName: "molestias",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: false,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: false,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "repellat",
                                                                            Expressions: []string{
                                                                                "autem",
                                                                                "repellat",
                                                                            },
                                                                            MaxComparisonValue: "libero",
                                                                            MinComparisonValue: "ad",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "veritatis",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "ab",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "repudiandae",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "explicabo",
                                                                            MinComparisonValue: "recusandae",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "facilis",
                                                                            MaxComparisonValue: "sit",
                                                                            MetricName: "hic",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quis",
                                                                            Expressions: []string{
                                                                                "voluptatibus",
                                                                                "ipsa",
                                                                            },
                                                                            MaxComparisonValue: "corporis",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "laboriosam",
                                                                            MaxComparisonValue: "deserunt",
                                                                            MetricName: "dignissimos",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "voluptas",
                                                                            Expressions: []string{
                                                                                "impedit",
                                                                            },
                                                                            MaxComparisonValue: "consequatur",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "fugit",
                                                                            MetricName: "aut",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "ratione",
                                                                    Expressions: []string{
                                                                        "exercitationem",
                                                                    },
                                                                    MaxComparisonValue: "facilis",
                                                                    MinComparisonValue: "ratione",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "repellendus",
                                                                    MaxComparisonValue: "atque",
                                                                    MetricName: "repellat",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "sed",
                                                                    Expressions: []string{
                                                                        "ut",
                                                                        "accusantium",
                                                                        "voluptas",
                                                                    },
                                                                    MaxComparisonValue: "placeat",
                                                                    MinComparisonValue: "temporibus",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "odio",
                                                                    MaxComparisonValue: "et",
                                                                    MetricName: "omnis",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            SegmentID: "nihil",
                        },
                    },
                    ViewID: "officia",
                },
                shared.ReportRequest{
                    CohortGroup: &shared.CohortGroup{
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "similique",
                                    StartDate: "aliquam",
                                },
                                Name: "aut",
                                Type: "FIRST_VISIT_DATE",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "sint",
                                    StartDate: "earum",
                                },
                                Name: "quia",
                                Type: "UNSPECIFIED_COHORT_TYPE",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "architecto",
                                    StartDate: "praesentium",
                                },
                                Name: "et",
                                Type: "UNSPECIFIED_COHORT_TYPE",
                            },
                        },
                        LifetimeValue: false,
                    },
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "rerum",
                            StartDate: "magnam",
                        },
                    },
                    DimensionFilterClauses: []shared.DimensionFilterClause{
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "ullam",
                                    Expressions: []string{
                                        "nam",
                                        "in",
                                    },
                                    Not: true,
                                    Operator: "IN_LIST",
                                },
                            },
                            Operator: "OPERATOR_UNSPECIFIED",
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "voluptates",
                                "molestias",
                            },
                            Name: "vel",
                        },
                    },
                    FiltersExpression: "numquam",
                    HideTotals: false,
                    HideValueRanges: false,
                    IncludeEmptyRows: true,
                    MetricFilterClauses: []shared.MetricFilterClause{
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: "necessitatibus",
                                    MetricName: "quia",
                                    Not: true,
                                    Operator: "GREATER_THAN",
                                },
                                shared.MetricFilter{
                                    ComparisonValue: "at",
                                    MetricName: "ut",
                                    Not: true,
                                    Operator: "EQUAL",
                                },
                                shared.MetricFilter{
                                    ComparisonValue: "dignissimos",
                                    MetricName: "accusantium",
                                    Not: false,
                                    Operator: "IS_MISSING",
                                },
                            },
                            Operator: "AND",
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Alias: "dolor",
                            Expression: "dolorem",
                            FormattingType: "METRIC_TYPE_UNSPECIFIED",
                        },
                    },
                    OrderBys: []shared.OrderBy{
                        shared.OrderBy{
                            FieldName: "nulla",
                            OrderType: "DIMENSION_AS_INTEGER",
                            SortOrder: "DESCENDING",
                        },
                        shared.OrderBy{
                            FieldName: "eligendi",
                            OrderType: "VALUE",
                            SortOrder: "SORT_ORDER_UNSPECIFIED",
                        },
                        shared.OrderBy{
                            FieldName: "sed",
                            OrderType: "SMART",
                            SortOrder: "DESCENDING",
                        },
                    },
                    PageSize: 1298770911997810884,
                    PageToken: "commodi",
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "aut",
                                            Expressions: []string{
                                                "eligendi",
                                                "et",
                                            },
                                            Not: true,
                                            Operator: "PARTIAL",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "eligendi",
                                            Expressions: []string{
                                                "beatae",
                                                "nostrum",
                                            },
                                            Not: true,
                                            Operator: "IN_LIST",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "sequi",
                                            Expressions: []string{
                                                "dolorem",
                                                "repudiandae",
                                                "est",
                                            },
                                            Not: true,
                                            Operator: "EXACT",
                                        },
                                    },
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "qui",
                                            Expressions: []string{
                                                "quos",
                                                "nihil",
                                                "voluptas",
                                            },
                                            Not: false,
                                            Operator: "PARTIAL",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "modi",
                                            Expressions: []string{
                                                "inventore",
                                            },
                                            Not: false,
                                            Operator: "OPERATOR_UNSPECIFIED",
                                        },
                                    },
                                    Operator: "OR",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "deserunt",
                                            Expressions: []string{
                                                "aperiam",
                                                "et",
                                            },
                                            Not: false,
                                            Operator: "ENDS_WITH",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "itaque",
                                            Expressions: []string{
                                                "placeat",
                                            },
                                            Not: false,
                                            Operator: "OPERATOR_UNSPECIFIED",
                                        },
                                    },
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "ut",
                                        "quisquam",
                                        "sit",
                                    },
                                    Name: "ratione",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "tenetur",
                                        "quia",
                                    },
                                    Name: "ut",
                                },
                            },
                            MaxGroupCount: 2455040378979801340,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "aut",
                                    Expression: "itaque",
                                    FormattingType: "INTEGER",
                                },
                                shared.Metric{
                                    Alias: "qui",
                                    Expression: "earum",
                                    FormattingType: "TIME",
                                },
                            },
                            StartGroup: 4532570297948078418,
                        },
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "quas",
                                            Expressions: []string{
                                                "blanditiis",
                                                "eos",
                                                "ut",
                                            },
                                            Not: false,
                                            Operator: "ENDS_WITH",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "dolores",
                                            Expressions: []string{
                                                "itaque",
                                                "eligendi",
                                                "libero",
                                            },
                                            Not: false,
                                            Operator: "REGEXP",
                                        },
                                    },
                                    Operator: "AND",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "nihil",
                                            Expressions: []string{
                                                "quasi",
                                                "quia",
                                                "molestiae",
                                            },
                                            Not: true,
                                            Operator: "PARTIAL",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "modi",
                                            Expressions: []string{
                                                "dolorem",
                                                "ut",
                                            },
                                            Not: false,
                                            Operator: "IN_LIST",
                                        },
                                    },
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "culpa",
                                            Expressions: []string{
                                                "sint",
                                                "est",
                                            },
                                            Not: true,
                                            Operator: "BEGINS_WITH",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "tempora",
                                            Expressions: []string{
                                                "eius",
                                                "aut",
                                            },
                                            Not: false,
                                            Operator: "PARTIAL",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "non",
                                            Expressions: []string{
                                                "nostrum",
                                                "sit",
                                            },
                                            Not: false,
                                            Operator: "EXACT",
                                        },
                                    },
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "aut",
                                    },
                                    Name: "rerum",
                                },
                            },
                            MaxGroupCount: 5876915796809974624,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "soluta",
                                    Expression: "accusantium",
                                    FormattingType: "FLOAT",
                                },
                            },
                            StartGroup: 5379839699936459243,
                        },
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "mollitia",
                                            Expressions: []string{
                                                "a",
                                                "et",
                                                "omnis",
                                            },
                                            Not: false,
                                            Operator: "NUMERIC_LESS_THAN",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "laboriosam",
                                            Expressions: []string{
                                                "cumque",
                                                "quibusdam",
                                                "distinctio",
                                            },
                                            Not: true,
                                            Operator: "EXACT",
                                        },
                                    },
                                    Operator: "AND",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "quos",
                                            Expressions: []string{
                                                "quaerat",
                                                "vel",
                                                "tempora",
                                            },
                                            Not: true,
                                            Operator: "NUMERIC_GREATER_THAN",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "quia",
                                            Expressions: []string{
                                                "repellat",
                                                "accusantium",
                                                "et",
                                            },
                                            Not: true,
                                            Operator: "EXACT",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "eaque",
                                            Expressions: []string{
                                                "possimus",
                                                "consectetur",
                                                "quidem",
                                            },
                                            Not: false,
                                            Operator: "EXACT",
                                        },
                                    },
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "aspernatur",
                                            Expressions: []string{
                                                "facilis",
                                                "tempore",
                                            },
                                            Not: false,
                                            Operator: "BEGINS_WITH",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "modi",
                                            Expressions: []string{
                                                "laudantium",
                                            },
                                            Not: false,
                                            Operator: "OPERATOR_UNSPECIFIED",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "sint",
                                            Expressions: []string{
                                                "laudantium",
                                                "aliquam",
                                                "fugit",
                                            },
                                            Not: false,
                                            Operator: "NUMERIC_GREATER_THAN",
                                        },
                                    },
                                    Operator: "AND",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "molestiae",
                                    },
                                    Name: "non",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "rem",
                                        "ipsum",
                                        "quasi",
                                    },
                                    Name: "aut",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "eos",
                                        "sint",
                                        "aliquid",
                                    },
                                    Name: "a",
                                },
                            },
                            MaxGroupCount: 8626443857861818200,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "perferendis",
                                    Expression: "numquam",
                                    FormattingType: "TIME",
                                },
                                shared.Metric{
                                    Alias: "vitae",
                                    Expression: "et",
                                    FormattingType: "CURRENCY",
                                },
                            },
                            StartGroup: 1806218515051014113,
                        },
                    },
                    SamplingLevel: "DEFAULT",
                    Segments: []shared.Segment{
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: "repellat",
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: true,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: true,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "voluptatem",
                                                                            Expressions: []string{
                                                                                "quasi",
                                                                                "deleniti",
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "sit",
                                                                            MinComparisonValue: "assumenda",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ipsum",
                                                                            MaxComparisonValue: "consequuntur",
                                                                            MetricName: "laudantium",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quod",
                                                                            Expressions: []string{
                                                                                "aliquam",
                                                                                "aut",
                                                                                "laborum",
                                                                            },
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MinComparisonValue: "enim",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "non",
                                                                            MaxComparisonValue: "saepe",
                                                                            MetricName: "dolores",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "omnis",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "qui",
                                                                            MinComparisonValue: "deleniti",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "enim",
                                                                            MaxComparisonValue: "qui",
                                                                            MetricName: "explicabo",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "expedita",
                                                                            Expressions: []string{
                                                                                "eligendi",
                                                                                "est",
                                                                            },
                                                                            MaxComparisonValue: "similique",
                                                                            MinComparisonValue: "architecto",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptatem",
                                                                            MaxComparisonValue: "fuga",
                                                                            MetricName: "reiciendis",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "corporis",
                                                                            Expressions: []string{
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "quaerat",
                                                                            MinComparisonValue: "sed",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "non",
                                                                            MaxComparisonValue: "quia",
                                                                            MetricName: "et",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "voluptas",
                                                                            Expressions: []string{
                                                                                "minima",
                                                                                "nihil",
                                                                                "voluptas",
                                                                            },
                                                                            MaxComparisonValue: "impedit",
                                                                            MinComparisonValue: "ipsum",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "similique",
                                                                            MaxComparisonValue: "minima",
                                                                            MetricName: "ab",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "dolor",
                                                                            Expressions: []string{
                                                                                "voluptatem",
                                                                                "nesciunt",
                                                                            },
                                                                            MaxComparisonValue: "porro",
                                                                            MinComparisonValue: "ut",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "commodi",
                                                                            MaxComparisonValue: "id",
                                                                            MetricName: "officiis",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "dolores",
                                                                            Expressions: []string{
                                                                                "delectus",
                                                                                "sint",
                                                                            },
                                                                            MaxComparisonValue: "non",
                                                                            MinComparisonValue: "labore",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ad",
                                                                            MaxComparisonValue: "magni",
                                                                            MetricName: "eveniet",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "quia",
                                                                            Expressions: []string{
                                                                                "incidunt",
                                                                                "modi",
                                                                            },
                                                                            MaxComparisonValue: "voluptas",
                                                                            MinComparisonValue: "ex",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "inventore",
                                                                            MaxComparisonValue: "quia",
                                                                            MetricName: "amet",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "sunt",
                                                                            Expressions: []string{
                                                                                "aspernatur",
                                                                            },
                                                                            MaxComparisonValue: "quis",
                                                                            MinComparisonValue: "veniam",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "omnis",
                                                                            MaxComparisonValue: "sunt",
                                                                            MetricName: "eaque",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "laborum",
                                                                                "ducimus",
                                                                                "rerum",
                                                                            },
                                                                            MaxComparisonValue: "autem",
                                                                            MinComparisonValue: "sint",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "blanditiis",
                                                                            MaxComparisonValue: "impedit",
                                                                            MetricName: "sunt",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "eaque",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                                "sapiente",
                                                                            },
                                                                            MaxComparisonValue: "natus",
                                                                            MinComparisonValue: "nobis",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "esse",
                                                                            MaxComparisonValue: "ad",
                                                                            MetricName: "culpa",
                                                                            Operator: "EQUAL",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "est",
                                                                            Expressions: []string{
                                                                                "blanditiis",
                                                                                "enim",
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "odit",
                                                                            MinComparisonValue: "non",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sunt",
                                                                            MaxComparisonValue: "ea",
                                                                            MetricName: "id",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "modi",
                                                                            Expressions: []string{
                                                                                "quia",
                                                                                "maiores",
                                                                            },
                                                                            MaxComparisonValue: "nisi",
                                                                            MinComparisonValue: "omnis",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "praesentium",
                                                                            MaxComparisonValue: "totam",
                                                                            MetricName: "ut",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "qui",
                                                                            Expressions: []string{
                                                                                "rerum",
                                                                            },
                                                                            MaxComparisonValue: "qui",
                                                                            MinComparisonValue: "quis",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "magni",
                                                                            MaxComparisonValue: "iure",
                                                                            MetricName: "culpa",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quia",
                                                                            Expressions: []string{
                                                                                "aut",
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "pariatur",
                                                                            MinComparisonValue: "dicta",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "eveniet",
                                                                            MaxComparisonValue: "corrupti",
                                                                            MetricName: "ut",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "sint",
                                                                            Expressions: []string{
                                                                                "aut",
                                                                                "et",
                                                                                "eum",
                                                                            },
                                                                            MaxComparisonValue: "repellat",
                                                                            MinComparisonValue: "maiores",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ipsam",
                                                                            MaxComparisonValue: "odio",
                                                                            MetricName: "sit",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "quia",
                                                                            Expressions: []string{
                                                                                "placeat",
                                                                                "magni",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "est",
                                                                            MinComparisonValue: "dolorum",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "distinctio",
                                                                            MaxComparisonValue: "quaerat",
                                                                            MetricName: "sit",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "sapiente",
                                                                    Expressions: []string{
                                                                        "vero",
                                                                    },
                                                                    MaxComparisonValue: "voluptatibus",
                                                                    MinComparisonValue: "facere",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "nobis",
                                                                    MaxComparisonValue: "nulla",
                                                                    MetricName: "nesciunt",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "quia",
                                                                    Expressions: []string{
                                                                        "suscipit",
                                                                    },
                                                                    MaxComparisonValue: "et",
                                                                    MinComparisonValue: "consectetur",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "aperiam",
                                                                    MaxComparisonValue: "distinctio",
                                                                    MetricName: "ex",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: true,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: false,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "vero",
                                                                            Expressions: []string{
                                                                                "omnis",
                                                                                "ducimus",
                                                                            },
                                                                            MaxComparisonValue: "nulla",
                                                                            MinComparisonValue: "non",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "dolore",
                                                                            MaxComparisonValue: "cupiditate",
                                                                            MetricName: "non",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "quae",
                                                                            Expressions: []string{
                                                                                "recusandae",
                                                                                "nostrum",
                                                                                "maxime",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "sunt",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "repudiandae",
                                                                            MaxComparisonValue: "similique",
                                                                            MetricName: "consequatur",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "rerum",
                                                                            Expressions: []string{
                                                                                "voluptatem",
                                                                            },
                                                                            MaxComparisonValue: "dolor",
                                                                            MinComparisonValue: "nobis",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "exercitationem",
                                                                            MaxComparisonValue: "provident",
                                                                            MetricName: "necessitatibus",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "accusamus",
                                                                            Expressions: []string{
                                                                                "fuga",
                                                                                "consequatur",
                                                                            },
                                                                            MaxComparisonValue: "dignissimos",
                                                                            MinComparisonValue: "ipsa",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "velit",
                                                                            MaxComparisonValue: "expedita",
                                                                            MetricName: "sit",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "eos",
                                                                            Expressions: []string{
                                                                                "similique",
                                                                                "commodi",
                                                                            },
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MinComparisonValue: "ut",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "labore",
                                                                            MaxComparisonValue: "quasi",
                                                                            MetricName: "occaecati",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "eos",
                                                                    Expressions: []string{
                                                                        "sit",
                                                                        "quos",
                                                                        "numquam",
                                                                    },
                                                                    MaxComparisonValue: "neque",
                                                                    MinComparisonValue: "ullam",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quia",
                                                                    MaxComparisonValue: "vero",
                                                                    MetricName: "ex",
                                                                    Operator: "EQUAL",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "doloremque",
                                                                    Expressions: []string{
                                                                        "quis",
                                                                    },
                                                                    MaxComparisonValue: "repellat",
                                                                    MinComparisonValue: "omnis",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "aperiam",
                                                                    MaxComparisonValue: "omnis",
                                                                    MetricName: "impedit",
                                                                    Operator: "EQUAL",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "sed",
                                                                    Expressions: []string{
                                                                        "a",
                                                                    },
                                                                    MaxComparisonValue: "magni",
                                                                    MinComparisonValue: "tenetur",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "incidunt",
                                                                    MaxComparisonValue: "qui",
                                                                    MetricName: "hic",
                                                                    Operator: "EQUAL",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "est",
                                                                    Expressions: []string{
                                                                        "voluptatem",
                                                                        "vel",
                                                                        "aut",
                                                                    },
                                                                    MaxComparisonValue: "in",
                                                                    MinComparisonValue: "voluptas",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "placeat",
                                                                    MaxComparisonValue: "numquam",
                                                                    MetricName: "quos",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "rerum",
                                                                    Expressions: []string{
                                                                        "hic",
                                                                    },
                                                                    MaxComparisonValue: "eaque",
                                                                    MinComparisonValue: "dolor",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "dicta",
                                                                    MaxComparisonValue: "quas",
                                                                    MetricName: "temporibus",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "nulla",
                                                                    Expressions: []string{
                                                                        "omnis",
                                                                    },
                                                                    MaxComparisonValue: "qui",
                                                                    MinComparisonValue: "nulla",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "consequatur",
                                                                    MaxComparisonValue: "aliquam",
                                                                    MetricName: "dolorum",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "est",
                                                                    Expressions: []string{
                                                                        "quos",
                                                                        "blanditiis",
                                                                    },
                                                                    MaxComparisonValue: "fugit",
                                                                    MinComparisonValue: "vel",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "est",
                                                                    MaxComparisonValue: "eius",
                                                                    MetricName: "nostrum",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "nihil",
                                                                    Expressions: []string{
                                                                        "magni",
                                                                        "et",
                                                                        "consectetur",
                                                                    },
                                                                    MaxComparisonValue: "accusamus",
                                                                    MinComparisonValue: "asperiores",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "veritatis",
                                                                    MaxComparisonValue: "et",
                                                                    MetricName: "ullam",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "qui",
                                                                    Expressions: []string{
                                                                        "nulla",
                                                                        "modi",
                                                                        "dignissimos",
                                                                    },
                                                                    MaxComparisonValue: "beatae",
                                                                    MinComparisonValue: "esse",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "eum",
                                                                    MaxComparisonValue: "aspernatur",
                                                                    MetricName: "molestiae",
                                                                    Operator: "EQUAL",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: false,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: false,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "hic",
                                                                            Expressions: []string{
                                                                                "dolores",
                                                                                "quae",
                                                                                "aut",
                                                                            },
                                                                            MaxComparisonValue: "hic",
                                                                            MinComparisonValue: "reprehenderit",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "nesciunt",
                                                                            MaxComparisonValue: "quia",
                                                                            MetricName: "dolores",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ducimus",
                                                                            Expressions: []string{
                                                                                "ducimus",
                                                                                "ea",
                                                                                "ipsa",
                                                                            },
                                                                            MaxComparisonValue: "sed",
                                                                            MinComparisonValue: "voluptatem",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "beatae",
                                                                            MaxComparisonValue: "cumque",
                                                                            MetricName: "pariatur",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "voluptatum",
                                                                            Expressions: []string{
                                                                                "pariatur",
                                                                                "natus",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "earum",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ab",
                                                                            MaxComparisonValue: "ad",
                                                                            MetricName: "earum",
                                                                            Operator: "EQUAL",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "quia",
                                                                            Expressions: []string{
                                                                                "nulla",
                                                                            },
                                                                            MaxComparisonValue: "aut",
                                                                            MinComparisonValue: "voluptatibus",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "deleniti",
                                                                            MaxComparisonValue: "libero",
                                                                            MetricName: "dolorum",
                                                                            Operator: "EQUAL",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "velit",
                                                                            Expressions: []string{
                                                                                "iste",
                                                                                "fugiat",
                                                                                "minus",
                                                                            },
                                                                            MaxComparisonValue: "laborum",
                                                                            MinComparisonValue: "eos",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "velit",
                                                                            MaxComparisonValue: "debitis",
                                                                            MetricName: "aut",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "neque",
                                                                            Expressions: []string{
                                                                                "libero",
                                                                                "error",
                                                                            },
                                                                            MaxComparisonValue: "eos",
                                                                            MinComparisonValue: "ex",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sunt",
                                                                            MaxComparisonValue: "dolorem",
                                                                            MetricName: "voluptas",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "soluta",
                                                                            Expressions: []string{
                                                                                "qui",
                                                                                "doloremque",
                                                                            },
                                                                            MaxComparisonValue: "nisi",
                                                                            MinComparisonValue: "id",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "debitis",
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MetricName: "magnam",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "aut",
                                                                            Expressions: []string{
                                                                                "libero",
                                                                                "dolorem",
                                                                            },
                                                                            MaxComparisonValue: "illo",
                                                                            MinComparisonValue: "sunt",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "autem",
                                                                            MaxComparisonValue: "commodi",
                                                                            MetricName: "deleniti",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "sed",
                                                                            Expressions: []string{
                                                                                "distinctio",
                                                                                "occaecati",
                                                                                "rem",
                                                                            },
                                                                            MaxComparisonValue: "est",
                                                                            MinComparisonValue: "quo",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "veritatis",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "sunt",
                                                                            Operator: "EQUAL",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "recusandae",
                                                                            Expressions: []string{
                                                                                "voluptatem",
                                                                            },
                                                                            MaxComparisonValue: "sapiente",
                                                                            MinComparisonValue: "dolores",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sit",
                                                                            MaxComparisonValue: "repellat",
                                                                            MetricName: "earum",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "in",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                                "debitis",
                                                                            },
                                                                            MaxComparisonValue: "id",
                                                                            MinComparisonValue: "vel",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "fuga",
                                                                            MaxComparisonValue: "velit",
                                                                            MetricName: "ullam",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "repellendus",
                                                                                "a",
                                                                            },
                                                                            MaxComparisonValue: "non",
                                                                            MinComparisonValue: "nesciunt",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "perspiciatis",
                                                                            MaxComparisonValue: "nihil",
                                                                            MetricName: "enim",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "minus",
                                                                            Expressions: []string{
                                                                                "sequi",
                                                                                "ut",
                                                                                "corporis",
                                                                            },
                                                                            MaxComparisonValue: "ea",
                                                                            MinComparisonValue: "adipisci",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sunt",
                                                                            MaxComparisonValue: "numquam",
                                                                            MetricName: "et",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "impedit",
                                                                    Expressions: []string{
                                                                        "sint",
                                                                        "quis",
                                                                    },
                                                                    MaxComparisonValue: "dolores",
                                                                    MinComparisonValue: "sed",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quidem",
                                                                    MaxComparisonValue: "reiciendis",
                                                                    MetricName: "velit",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "dolor",
                                                                    Expressions: []string{
                                                                        "officiis",
                                                                        "quo",
                                                                    },
                                                                    MaxComparisonValue: "aut",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "aut",
                                                                    MaxComparisonValue: "natus",
                                                                    MetricName: "iste",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                UserSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: false,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: false,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "aspernatur",
                                                                            Expressions: []string{
                                                                                "assumenda",
                                                                            },
                                                                            MaxComparisonValue: "minus",
                                                                            MinComparisonValue: "voluptatibus",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "qui",
                                                                            MaxComparisonValue: "doloribus",
                                                                            MetricName: "est",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "nulla",
                                                                            Expressions: []string{
                                                                                "quas",
                                                                                "culpa",
                                                                            },
                                                                            MaxComparisonValue: "maiores",
                                                                            MinComparisonValue: "consequatur",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "commodi",
                                                                            MaxComparisonValue: "tempore",
                                                                            MetricName: "nesciunt",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "vero",
                                                                                "fuga",
                                                                            },
                                                                            MaxComparisonValue: "dolores",
                                                                            MinComparisonValue: "doloremque",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "dolores",
                                                                            MaxComparisonValue: "autem",
                                                                            MetricName: "enim",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "officia",
                                                                            Expressions: []string{
                                                                                "neque",
                                                                            },
                                                                            MaxComparisonValue: "quia",
                                                                            MinComparisonValue: "alias",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "suscipit",
                                                                            MaxComparisonValue: "minus",
                                                                            MetricName: "aut",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "ad",
                                                                    Expressions: []string{
                                                                        "labore",
                                                                    },
                                                                    MaxComparisonValue: "omnis",
                                                                    MinComparisonValue: "sequi",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ipsa",
                                                                    MaxComparisonValue: "repellendus",
                                                                    MetricName: "rerum",
                                                                    Operator: "EQUAL",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "neque",
                                                                    Expressions: []string{
                                                                        "mollitia",
                                                                        "distinctio",
                                                                    },
                                                                    MaxComparisonValue: "culpa",
                                                                    MinComparisonValue: "sunt",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quo",
                                                                    MaxComparisonValue: "sed",
                                                                    MetricName: "est",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "amet",
                                                                    Expressions: []string{
                                                                        "culpa",
                                                                        "possimus",
                                                                    },
                                                                    MaxComparisonValue: "ex",
                                                                    MinComparisonValue: "quod",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "delectus",
                                                                    MaxComparisonValue: "architecto",
                                                                    MetricName: "aut",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "cupiditate",
                                                                    Expressions: []string{
                                                                        "sapiente",
                                                                        "qui",
                                                                        "laudantium",
                                                                    },
                                                                    MaxComparisonValue: "repellendus",
                                                                    MinComparisonValue: "architecto",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "excepturi",
                                                                    MaxComparisonValue: "animi",
                                                                    MetricName: "error",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "magni",
                                                                    Expressions: []string{
                                                                        "consequatur",
                                                                        "nulla",
                                                                        "officia",
                                                                    },
                                                                    MaxComparisonValue: "sunt",
                                                                    MinComparisonValue: "accusamus",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "deleniti",
                                                                    MaxComparisonValue: "maiores",
                                                                    MetricName: "quasi",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "sed",
                                                                    Expressions: []string{
                                                                        "veniam",
                                                                        "qui",
                                                                    },
                                                                    MaxComparisonValue: "facere",
                                                                    MinComparisonValue: "doloremque",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "distinctio",
                                                                    MaxComparisonValue: "eos",
                                                                    MetricName: "officia",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "nihil",
                                                                    Expressions: []string{
                                                                        "at",
                                                                        "ut",
                                                                        "ducimus",
                                                                    },
                                                                    MaxComparisonValue: "sit",
                                                                    MinComparisonValue: "ut",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ea",
                                                                    MaxComparisonValue: "officiis",
                                                                    MetricName: "exercitationem",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "ea",
                                                                    Expressions: []string{
                                                                        "cumque",
                                                                        "id",
                                                                        "sint",
                                                                    },
                                                                    MaxComparisonValue: "libero",
                                                                    MinComparisonValue: "eum",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "earum",
                                                                    MaxComparisonValue: "aut",
                                                                    MetricName: "nihil",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: true,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: true,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "sunt",
                                                                            },
                                                                            MaxComparisonValue: "laborum",
                                                                            MinComparisonValue: "quis",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "recusandae",
                                                                            MaxComparisonValue: "placeat",
                                                                            MetricName: "dolorem",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quod",
                                                                            Expressions: []string{
                                                                                "dicta",
                                                                            },
                                                                            MaxComparisonValue: "eligendi",
                                                                            MinComparisonValue: "eum",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "labore",
                                                                            MaxComparisonValue: "a",
                                                                            MetricName: "laudantium",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "aut",
                                                                            Expressions: []string{
                                                                                "voluptatum",
                                                                            },
                                                                            MaxComparisonValue: "repudiandae",
                                                                            MinComparisonValue: "accusamus",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "officia",
                                                                            MaxComparisonValue: "ipsum",
                                                                            MetricName: "enim",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "quod",
                                                                            Expressions: []string{
                                                                                "fugit",
                                                                                "qui",
                                                                                "beatae",
                                                                            },
                                                                            MaxComparisonValue: "impedit",
                                                                            MinComparisonValue: "natus",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "non",
                                                                            MaxComparisonValue: "tempore",
                                                                            MetricName: "iusto",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ad",
                                                                            Expressions: []string{
                                                                                "ratione",
                                                                                "ad",
                                                                            },
                                                                            MaxComparisonValue: "eaque",
                                                                            MinComparisonValue: "eos",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quia",
                                                                            MaxComparisonValue: "nostrum",
                                                                            MetricName: "vel",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "sit",
                                                                            Expressions: []string{
                                                                                "est",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "aliquam",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "pariatur",
                                                                            MaxComparisonValue: "tempora",
                                                                            MetricName: "aperiam",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "sunt",
                                                                            Expressions: []string{
                                                                                "similique",
                                                                                "aspernatur",
                                                                            },
                                                                            MaxComparisonValue: "placeat",
                                                                            MinComparisonValue: "nemo",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "voluptas",
                                                                            MetricName: "sint",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "voluptas",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                                "sapiente",
                                                                                "numquam",
                                                                            },
                                                                            MaxComparisonValue: "est",
                                                                            MinComparisonValue: "voluptatem",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quaerat",
                                                                            MaxComparisonValue: "quia",
                                                                            MetricName: "atque",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "quia",
                                                                            Expressions: []string{
                                                                                "non",
                                                                                "porro",
                                                                            },
                                                                            MaxComparisonValue: "ut",
                                                                            MinComparisonValue: "eum",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "assumenda",
                                                                            MaxComparisonValue: "rerum",
                                                                            MetricName: "consequatur",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "dolorum",
                                                                            Expressions: []string{
                                                                                "perspiciatis",
                                                                                "repudiandae",
                                                                                "non",
                                                                            },
                                                                            MaxComparisonValue: "veniam",
                                                                            MinComparisonValue: "earum",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "non",
                                                                            MaxComparisonValue: "quisquam",
                                                                            MetricName: "aspernatur",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ipsum",
                                                                            Expressions: []string{
                                                                                "qui",
                                                                                "quo",
                                                                            },
                                                                            MaxComparisonValue: "ut",
                                                                            MinComparisonValue: "dolorem",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "vitae",
                                                                            MaxComparisonValue: "cupiditate",
                                                                            MetricName: "non",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "et",
                                                                                "sint",
                                                                            },
                                                                            MaxComparisonValue: "reiciendis",
                                                                            MinComparisonValue: "possimus",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "rerum",
                                                                            MaxComparisonValue: "dolore",
                                                                            MetricName: "placeat",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "sint",
                                                                    Expressions: []string{
                                                                        "nihil",
                                                                        "assumenda",
                                                                        "esse",
                                                                    },
                                                                    MaxComparisonValue: "sint",
                                                                    MinComparisonValue: "dolorem",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quo",
                                                                    MaxComparisonValue: "esse",
                                                                    MetricName: "nulla",
                                                                    Operator: "EQUAL",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: false,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: true,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "aut",
                                                                            Expressions: []string{
                                                                                "molestiae",
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "aut",
                                                                            MinComparisonValue: "eaque",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "qui",
                                                                            MaxComparisonValue: "sapiente",
                                                                            MetricName: "est",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "voluptate",
                                                                            Expressions: []string{
                                                                                "dolorem",
                                                                                "quo",
                                                                            },
                                                                            MaxComparisonValue: "mollitia",
                                                                            MinComparisonValue: "quasi",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "accusantium",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "at",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "exercitationem",
                                                                            Expressions: []string{
                                                                                "animi",
                                                                            },
                                                                            MaxComparisonValue: "autem",
                                                                            MinComparisonValue: "voluptatibus",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "numquam",
                                                                            MaxComparisonValue: "voluptas",
                                                                            MetricName: "placeat",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "sed",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "consequatur",
                                                                            MinComparisonValue: "nulla",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quia",
                                                                            MaxComparisonValue: "veniam",
                                                                            MetricName: "cumque",
                                                                            Operator: "EQUAL",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "dolore",
                                                                            Expressions: []string{
                                                                                "ipsum",
                                                                                "rem",
                                                                            },
                                                                            MaxComparisonValue: "alias",
                                                                            MinComparisonValue: "error",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "laborum",
                                                                            MaxComparisonValue: "ipsum",
                                                                            MetricName: "quod",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "reiciendis",
                                                                            Expressions: []string{
                                                                                "illo",
                                                                                "eveniet",
                                                                                "velit",
                                                                            },
                                                                            MaxComparisonValue: "magni",
                                                                            MinComparisonValue: "quia",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "minima",
                                                                            MaxComparisonValue: "qui",
                                                                            MetricName: "dolores",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "magnam",
                                                                            Expressions: []string{
                                                                                "aut",
                                                                                "et",
                                                                                "aut",
                                                                            },
                                                                            MaxComparisonValue: "necessitatibus",
                                                                            MinComparisonValue: "sunt",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "nobis",
                                                                            MaxComparisonValue: "id",
                                                                            MetricName: "reprehenderit",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "maxime",
                                                                            Expressions: []string{
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "eveniet",
                                                                            MinComparisonValue: "soluta",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "esse",
                                                                            MaxComparisonValue: "vitae",
                                                                            MetricName: "ut",
                                                                            Operator: "EQUAL",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "iure",
                                                                            Expressions: []string{
                                                                                "magni",
                                                                                "architecto",
                                                                            },
                                                                            MaxComparisonValue: "alias",
                                                                            MinComparisonValue: "minus",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "eligendi",
                                                                            MaxComparisonValue: "quisquam",
                                                                            MetricName: "enim",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "velit",
                                                                            Expressions: []string{
                                                                                "voluptates",
                                                                            },
                                                                            MaxComparisonValue: "sunt",
                                                                            MinComparisonValue: "neque",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "quae",
                                                                            MetricName: "fugit",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "laboriosam",
                                                                            Expressions: []string{
                                                                                "sed",
                                                                            },
                                                                            MaxComparisonValue: "reprehenderit",
                                                                            MinComparisonValue: "iusto",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "occaecati",
                                                                            MaxComparisonValue: "repellendus",
                                                                            MetricName: "rerum",
                                                                            Operator: "EQUAL",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "voluptas",
                                                                            Expressions: []string{
                                                                                "atque",
                                                                            },
                                                                            MaxComparisonValue: "dolores",
                                                                            MinComparisonValue: "optio",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "asperiores",
                                                                            MetricName: "totam",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "maxime",
                                                                            Expressions: []string{
                                                                                "et",
                                                                                "sed",
                                                                                "aut",
                                                                            },
                                                                            MaxComparisonValue: "ea",
                                                                            MinComparisonValue: "non",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "quod",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ab",
                                                                            Expressions: []string{
                                                                                "animi",
                                                                            },
                                                                            MaxComparisonValue: "asperiores",
                                                                            MinComparisonValue: "qui",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "harum",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "eos",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "voluptatem",
                                                                    Expressions: []string{
                                                                        "ut",
                                                                    },
                                                                    MaxComparisonValue: "est",
                                                                    MinComparisonValue: "aut",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "delectus",
                                                                    MaxComparisonValue: "cum",
                                                                    MetricName: "praesentium",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "eos",
                                                                    Expressions: []string{
                                                                        "perferendis",
                                                                        "quam",
                                                                        "dolorem",
                                                                    },
                                                                    MaxComparisonValue: "et",
                                                                    MinComparisonValue: "ea",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "recusandae",
                                                                    MaxComparisonValue: "soluta",
                                                                    MetricName: "eum",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "enim",
                                                                    Expressions: []string{
                                                                        "aut",
                                                                        "molestias",
                                                                    },
                                                                    MaxComparisonValue: "voluptas",
                                                                    MinComparisonValue: "consectetur",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "iste",
                                                                    MaxComparisonValue: "quibusdam",
                                                                    MetricName: "architecto",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "omnis",
                                                                    Expressions: []string{
                                                                        "voluptatem",
                                                                        "dicta",
                                                                    },
                                                                    MaxComparisonValue: "accusamus",
                                                                    MinComparisonValue: "nostrum",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "reiciendis",
                                                                    MaxComparisonValue: "dolorem",
                                                                    MetricName: "et",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            SegmentID: "facere",
                        },
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: "consequatur",
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: true,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: false,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "velit",
                                                                            Expressions: []string{
                                                                                "nemo",
                                                                                "impedit",
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "consequatur",
                                                                            MinComparisonValue: "animi",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "repellendus",
                                                                            MaxComparisonValue: "similique",
                                                                            MetricName: "quod",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "velit",
                                                                            Expressions: []string{
                                                                                "deserunt",
                                                                            },
                                                                            MaxComparisonValue: "velit",
                                                                            MinComparisonValue: "sequi",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quam",
                                                                            MaxComparisonValue: "assumenda",
                                                                            MetricName: "optio",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "dolores",
                                                                                "dolore",
                                                                                "sequi",
                                                                            },
                                                                            MaxComparisonValue: "dicta",
                                                                            MinComparisonValue: "voluptatem",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "optio",
                                                                            MaxComparisonValue: "sapiente",
                                                                            MetricName: "vitae",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "maiores",
                                                                    Expressions: []string{
                                                                        "rerum",
                                                                        "tenetur",
                                                                    },
                                                                    MaxComparisonValue: "enim",
                                                                    MinComparisonValue: "praesentium",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "aut",
                                                                    MaxComparisonValue: "laboriosam",
                                                                    MetricName: "nisi",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: false,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: false,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "atque",
                                                                            Expressions: []string{
                                                                                "quidem",
                                                                                "doloremque",
                                                                            },
                                                                            MaxComparisonValue: "quia",
                                                                            MinComparisonValue: "officia",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sapiente",
                                                                            MaxComparisonValue: "ipsum",
                                                                            MetricName: "consequatur",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "sunt",
                                                                            Expressions: []string{
                                                                                "tempora",
                                                                                "alias",
                                                                                "aut",
                                                                            },
                                                                            MaxComparisonValue: "labore",
                                                                            MinComparisonValue: "reiciendis",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "dolorem",
                                                                            MaxComparisonValue: "rem",
                                                                            MetricName: "aliquid",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quidem",
                                                                            Expressions: []string{
                                                                                "hic",
                                                                            },
                                                                            MaxComparisonValue: "est",
                                                                            MinComparisonValue: "quis",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "facere",
                                                                            MetricName: "enim",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "sed",
                                                                            Expressions: []string{
                                                                                "eius",
                                                                            },
                                                                            MaxComparisonValue: "atque",
                                                                            MinComparisonValue: "ipsa",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "asperiores",
                                                                            MaxComparisonValue: "omnis",
                                                                            MetricName: "consequatur",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "necessitatibus",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                                "molestiae",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "voluptatum",
                                                                            MinComparisonValue: "inventore",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "animi",
                                                                            MaxComparisonValue: "dolores",
                                                                            MetricName: "ratione",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "non",
                                                                            Expressions: []string{
                                                                                "eum",
                                                                                "sed",
                                                                                "placeat",
                                                                            },
                                                                            MaxComparisonValue: "quis",
                                                                            MinComparisonValue: "rerum",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "assumenda",
                                                                            MetricName: "voluptates",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quisquam",
                                                                            Expressions: []string{
                                                                                "amet",
                                                                                "reiciendis",
                                                                                "repudiandae",
                                                                            },
                                                                            MaxComparisonValue: "rerum",
                                                                            MinComparisonValue: "illo",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "in",
                                                                            MaxComparisonValue: "at",
                                                                            MetricName: "rerum",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "est",
                                                                            Expressions: []string{
                                                                                "sapiente",
                                                                            },
                                                                            MaxComparisonValue: "quam",
                                                                            MinComparisonValue: "rerum",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "aspernatur",
                                                                            MetricName: "accusantium",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "dolorem",
                                                                            Expressions: []string{
                                                                                "omnis",
                                                                                "eos",
                                                                                "necessitatibus",
                                                                            },
                                                                            MaxComparisonValue: "eius",
                                                                            MinComparisonValue: "voluptas",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "rerum",
                                                                            MetricName: "libero",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "veniam",
                                                                            Expressions: []string{
                                                                                "in",
                                                                                "omnis",
                                                                                "iusto",
                                                                            },
                                                                            MaxComparisonValue: "ullam",
                                                                            MinComparisonValue: "ducimus",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "est",
                                                                            MaxComparisonValue: "amet",
                                                                            MetricName: "molestiae",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "expedita",
                                                                            Expressions: []string{
                                                                                "exercitationem",
                                                                                "saepe",
                                                                            },
                                                                            MaxComparisonValue: "blanditiis",
                                                                            MinComparisonValue: "fugit",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "doloremque",
                                                                            MaxComparisonValue: "alias",
                                                                            MetricName: "est",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "omnis",
                                                                                "labore",
                                                                            },
                                                                            MaxComparisonValue: "incidunt",
                                                                            MinComparisonValue: "optio",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "fuga",
                                                                            MaxComparisonValue: "velit",
                                                                            MetricName: "ea",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "dolor",
                                                                            Expressions: []string{
                                                                                "est",
                                                                                "quod",
                                                                                "rerum",
                                                                            },
                                                                            MaxComparisonValue: "dolorem",
                                                                            MinComparisonValue: "sapiente",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "occaecati",
                                                                            MaxComparisonValue: "aspernatur",
                                                                            MetricName: "vel",
                                                                            Operator: "EQUAL",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "aut",
                                                                    Expressions: []string{
                                                                        "nulla",
                                                                        "soluta",
                                                                        "nam",
                                                                    },
                                                                    MaxComparisonValue: "corrupti",
                                                                    MinComparisonValue: "minima",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "aperiam",
                                                                    MaxComparisonValue: "excepturi",
                                                                    MetricName: "debitis",
                                                                    Operator: "EQUAL",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "laudantium",
                                                                    Expressions: []string{
                                                                        "recusandae",
                                                                        "tempore",
                                                                        "itaque",
                                                                    },
                                                                    MaxComparisonValue: "fugit",
                                                                    MinComparisonValue: "consequatur",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "aut",
                                                                    MaxComparisonValue: "temporibus",
                                                                    MetricName: "ea",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "ea",
                                                                    Expressions: []string{
                                                                        "sint",
                                                                        "voluptatem",
                                                                    },
                                                                    MaxComparisonValue: "rerum",
                                                                    MinComparisonValue: "in",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ex",
                                                                    MaxComparisonValue: "aut",
                                                                    MetricName: "et",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "optio",
                                                                    Expressions: []string{
                                                                        "qui",
                                                                    },
                                                                    MaxComparisonValue: "est",
                                                                    MinComparisonValue: "velit",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "vitae",
                                                                    MaxComparisonValue: "nihil",
                                                                    MetricName: "unde",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "nemo",
                                                                    Expressions: []string{
                                                                        "et",
                                                                        "qui",
                                                                    },
                                                                    MaxComparisonValue: "eaque",
                                                                    MinComparisonValue: "minus",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "similique",
                                                                    MaxComparisonValue: "consequatur",
                                                                    MetricName: "sapiente",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "reprehenderit",
                                                                    Expressions: []string{
                                                                        "unde",
                                                                    },
                                                                    MaxComparisonValue: "in",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "harum",
                                                                    MaxComparisonValue: "qui",
                                                                    MetricName: "accusantium",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: true,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: true,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "rerum",
                                                                            Expressions: []string{
                                                                                "sit",
                                                                                "deserunt",
                                                                            },
                                                                            MaxComparisonValue: "velit",
                                                                            MinComparisonValue: "ullam",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "amet",
                                                                            MaxComparisonValue: "est",
                                                                            MetricName: "cum",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "repellendus",
                                                                            Expressions: []string{
                                                                                "est",
                                                                                "quidem",
                                                                                "nihil",
                                                                            },
                                                                            MaxComparisonValue: "corporis",
                                                                            MinComparisonValue: "odio",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "eos",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "voluptas",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ad",
                                                                            Expressions: []string{
                                                                                "dicta",
                                                                                "ratione",
                                                                                "ipsam",
                                                                            },
                                                                            MaxComparisonValue: "magni",
                                                                            MinComparisonValue: "quibusdam",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "est",
                                                                            MetricName: "sit",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "quo",
                                                                            Expressions: []string{
                                                                                "quo",
                                                                                "dolor",
                                                                                "dolorem",
                                                                            },
                                                                            MaxComparisonValue: "enim",
                                                                            MinComparisonValue: "nemo",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "in",
                                                                            MaxComparisonValue: "maxime",
                                                                            MetricName: "rerum",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quibusdam",
                                                                            Expressions: []string{
                                                                                "quidem",
                                                                            },
                                                                            MaxComparisonValue: "eum",
                                                                            MinComparisonValue: "natus",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "vero",
                                                                            MetricName: "voluptatibus",
                                                                            Operator: "EQUAL",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "fugit",
                                                                            Expressions: []string{
                                                                                "inventore",
                                                                            },
                                                                            MaxComparisonValue: "a",
                                                                            MinComparisonValue: "laboriosam",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptates",
                                                                            MaxComparisonValue: "laborum",
                                                                            MetricName: "eligendi",
                                                                            Operator: "EQUAL",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "sapiente",
                                                                            Expressions: []string{
                                                                                "aliquam",
                                                                                "ad",
                                                                            },
                                                                            MaxComparisonValue: "dolores",
                                                                            MinComparisonValue: "vel",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "eos",
                                                                            MaxComparisonValue: "nihil",
                                                                            MetricName: "corrupti",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "perferendis",
                                                                            Expressions: []string{
                                                                                "tenetur",
                                                                                "laudantium",
                                                                                "tenetur",
                                                                            },
                                                                            MaxComparisonValue: "iste",
                                                                            MinComparisonValue: "corrupti",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "non",
                                                                            MaxComparisonValue: "cumque",
                                                                            MetricName: "incidunt",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "debitis",
                                                                    Expressions: []string{
                                                                        "voluptatum",
                                                                        "numquam",
                                                                        "accusamus",
                                                                    },
                                                                    MaxComparisonValue: "est",
                                                                    MinComparisonValue: "sed",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "exercitationem",
                                                                    MaxComparisonValue: "corrupti",
                                                                    MetricName: "architecto",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "vero",
                                                                    Expressions: []string{
                                                                        "commodi",
                                                                    },
                                                                    MaxComparisonValue: "hic",
                                                                    MinComparisonValue: "nemo",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "enim",
                                                                    MaxComparisonValue: "voluptates",
                                                                    MetricName: "tempore",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "voluptatem",
                                                                    Expressions: []string{
                                                                        "non",
                                                                        "mollitia",
                                                                    },
                                                                    MaxComparisonValue: "qui",
                                                                    MinComparisonValue: "est",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "officiis",
                                                                    MaxComparisonValue: "molestiae",
                                                                    MetricName: "soluta",
                                                                    Operator: "EQUAL",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                UserSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: true,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: true,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "consequatur",
                                                                            Expressions: []string{
                                                                                "incidunt",
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "quo",
                                                                            MinComparisonValue: "est",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "minus",
                                                                            MaxComparisonValue: "voluptas",
                                                                            MetricName: "molestiae",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "qui",
                                                                            Expressions: []string{
                                                                                "laudantium",
                                                                                "est",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "nihil",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "omnis",
                                                                            MaxComparisonValue: "excepturi",
                                                                            MetricName: "voluptas",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "soluta",
                                                                            Expressions: []string{
                                                                                "tenetur",
                                                                                "sit",
                                                                            },
                                                                            MaxComparisonValue: "ut",
                                                                            MinComparisonValue: "earum",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sed",
                                                                            MaxComparisonValue: "a",
                                                                            MetricName: "voluptatem",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "repellendus",
                                                                            Expressions: []string{
                                                                                "cum",
                                                                                "saepe",
                                                                                "earum",
                                                                            },
                                                                            MaxComparisonValue: "consectetur",
                                                                            MinComparisonValue: "vero",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "officiis",
                                                                            MaxComparisonValue: "facilis",
                                                                            MetricName: "id",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "aspernatur",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                                "expedita",
                                                                            },
                                                                            MaxComparisonValue: "sequi",
                                                                            MinComparisonValue: "enim",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "cupiditate",
                                                                            MaxComparisonValue: "deleniti",
                                                                            MetricName: "consequatur",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "atque",
                                                                            Expressions: []string{
                                                                                "in",
                                                                                "autem",
                                                                            },
                                                                            MaxComparisonValue: "ipsam",
                                                                            MinComparisonValue: "rerum",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "velit",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "ullam",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "asperiores",
                                                                            Expressions: []string{
                                                                                "necessitatibus",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "perspiciatis",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "non",
                                                                            MaxComparisonValue: "voluptas",
                                                                            MetricName: "velit",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "excepturi",
                                                                            Expressions: []string{
                                                                                "soluta",
                                                                                "similique",
                                                                                "omnis",
                                                                            },
                                                                            MaxComparisonValue: "animi",
                                                                            MinComparisonValue: "quisquam",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "incidunt",
                                                                            MaxComparisonValue: "consequatur",
                                                                            MetricName: "inventore",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "necessitatibus",
                                                                            Expressions: []string{
                                                                                "cum",
                                                                                "fugiat",
                                                                            },
                                                                            MaxComparisonValue: "ut",
                                                                            MinComparisonValue: "incidunt",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sint",
                                                                            MaxComparisonValue: "deleniti",
                                                                            MetricName: "vero",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "similique",
                                                                            Expressions: []string{
                                                                                "aspernatur",
                                                                            },
                                                                            MaxComparisonValue: "rerum",
                                                                            MinComparisonValue: "voluptas",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "molestias",
                                                                            MaxComparisonValue: "omnis",
                                                                            MetricName: "et",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "occaecati",
                                                                            Expressions: []string{
                                                                                "et",
                                                                                "voluptatem",
                                                                            },
                                                                            MaxComparisonValue: "nostrum",
                                                                            MinComparisonValue: "quaerat",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "recusandae",
                                                                            MaxComparisonValue: "incidunt",
                                                                            MetricName: "eum",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "perspiciatis",
                                                                            Expressions: []string{
                                                                                "impedit",
                                                                            },
                                                                            MaxComparisonValue: "rem",
                                                                            MinComparisonValue: "quam",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ut",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "praesentium",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "nam",
                                                                            Expressions: []string{
                                                                                "officia",
                                                                                "in",
                                                                            },
                                                                            MaxComparisonValue: "commodi",
                                                                            MinComparisonValue: "quod",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "vel",
                                                                            MaxComparisonValue: "reprehenderit",
                                                                            MetricName: "nihil",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "magni",
                                                                            Expressions: []string{
                                                                                "quibusdam",
                                                                                "dolore",
                                                                            },
                                                                            MaxComparisonValue: "eveniet",
                                                                            MinComparisonValue: "pariatur",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sapiente",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "ut",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "cupiditate",
                                                                            Expressions: []string{
                                                                                "sint",
                                                                            },
                                                                            MaxComparisonValue: "minus",
                                                                            MinComparisonValue: "fugiat",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "rerum",
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MetricName: "quo",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "tempora",
                                                                            Expressions: []string{
                                                                                "earum",
                                                                            },
                                                                            MaxComparisonValue: "in",
                                                                            MinComparisonValue: "molestias",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "qui",
                                                                            MaxComparisonValue: "omnis",
                                                                            MetricName: "ipsa",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "velit",
                                                                            Expressions: []string{
                                                                                "rem",
                                                                            },
                                                                            MaxComparisonValue: "sint",
                                                                            MinComparisonValue: "assumenda",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "maxime",
                                                                            MaxComparisonValue: "in",
                                                                            MetricName: "quo",
                                                                            Operator: "EQUAL",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "dolor",
                                                                            Expressions: []string{
                                                                                "consequatur",
                                                                                "quo",
                                                                                "ipsum",
                                                                            },
                                                                            MaxComparisonValue: "suscipit",
                                                                            MinComparisonValue: "cumque",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aspernatur",
                                                                            MaxComparisonValue: "animi",
                                                                            MetricName: "dolorum",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "autem",
                                                                            MinComparisonValue: "praesentium",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "est",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "et",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "vel",
                                                                            Expressions: []string{
                                                                                "qui",
                                                                                "et",
                                                                                "dignissimos",
                                                                            },
                                                                            MaxComparisonValue: "quasi",
                                                                            MinComparisonValue: "pariatur",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "soluta",
                                                                            MaxComparisonValue: "rerum",
                                                                            MetricName: "ex",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "autem",
                                                                            Expressions: []string{
                                                                                "aut",
                                                                                "ipsam",
                                                                                "excepturi",
                                                                            },
                                                                            MaxComparisonValue: "temporibus",
                                                                            MinComparisonValue: "eum",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quidem",
                                                                            MaxComparisonValue: "eos",
                                                                            MetricName: "sint",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "dolores",
                                                                            Expressions: []string{
                                                                                "sit",
                                                                            },
                                                                            MaxComparisonValue: "corrupti",
                                                                            MinComparisonValue: "ea",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ad",
                                                                            MaxComparisonValue: "sapiente",
                                                                            MetricName: "quod",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "magnam",
                                                                    Expressions: []string{
                                                                        "earum",
                                                                        "ut",
                                                                    },
                                                                    MaxComparisonValue: "autem",
                                                                    MinComparisonValue: "occaecati",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "fugit",
                                                                    MaxComparisonValue: "qui",
                                                                    MetricName: "quis",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "quod",
                                                                    Expressions: []string{
                                                                        "accusantium",
                                                                        "impedit",
                                                                    },
                                                                    MaxComparisonValue: "nihil",
                                                                    MinComparisonValue: "quis",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "sapiente",
                                                                    MaxComparisonValue: "autem",
                                                                    MetricName: "omnis",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "rem",
                                                                    Expressions: []string{
                                                                        "tempora",
                                                                        "praesentium",
                                                                    },
                                                                    MaxComparisonValue: "ab",
                                                                    MinComparisonValue: "alias",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "voluptatum",
                                                                    MaxComparisonValue: "mollitia",
                                                                    MetricName: "fugit",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "unde",
                                                                    Expressions: []string{
                                                                        "recusandae",
                                                                        "consectetur",
                                                                    },
                                                                    MaxComparisonValue: "possimus",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ut",
                                                                    MaxComparisonValue: "magnam",
                                                                    MetricName: "ea",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "accusamus",
                                                                    Expressions: []string{
                                                                        "dolorem",
                                                                    },
                                                                    MaxComparisonValue: "similique",
                                                                    MinComparisonValue: "est",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "harum",
                                                                    MaxComparisonValue: "distinctio",
                                                                    MetricName: "et",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "aliquid",
                                                                    Expressions: []string{
                                                                        "et",
                                                                    },
                                                                    MaxComparisonValue: "molestiae",
                                                                    MinComparisonValue: "id",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "consequatur",
                                                                    MaxComparisonValue: "est",
                                                                    MetricName: "nemo",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "eveniet",
                                                                    Expressions: []string{
                                                                        "consectetur",
                                                                        "autem",
                                                                    },
                                                                    MaxComparisonValue: "quis",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "commodi",
                                                                    MaxComparisonValue: "quis",
                                                                    MetricName: "dicta",
                                                                    Operator: "EQUAL",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: false,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: true,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "aspernatur",
                                                                            Expressions: []string{
                                                                                "similique",
                                                                                "rerum",
                                                                            },
                                                                            MaxComparisonValue: "eum",
                                                                            MinComparisonValue: "ea",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "vitae",
                                                                            MaxComparisonValue: "fuga",
                                                                            MetricName: "est",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "tempora",
                                                                            Expressions: []string{
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "odio",
                                                                            MinComparisonValue: "minima",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "eum",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "provident",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "qui",
                                                                            Expressions: []string{
                                                                                "tenetur",
                                                                                "itaque",
                                                                            },
                                                                            MaxComparisonValue: "nam",
                                                                            MinComparisonValue: "repudiandae",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "est",
                                                                            MaxComparisonValue: "officia",
                                                                            MetricName: "est",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "cumque",
                                                                                "quo",
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "animi",
                                                                            MinComparisonValue: "repellendus",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "animi",
                                                                            MaxComparisonValue: "autem",
                                                                            MetricName: "eligendi",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "aut",
                                                                                "officiis",
                                                                            },
                                                                            MaxComparisonValue: "perspiciatis",
                                                                            MinComparisonValue: "omnis",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "soluta",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "amet",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "omnis",
                                                                            Expressions: []string{
                                                                                "eaque",
                                                                            },
                                                                            MaxComparisonValue: "recusandae",
                                                                            MinComparisonValue: "optio",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sunt",
                                                                            MaxComparisonValue: "perspiciatis",
                                                                            MetricName: "cupiditate",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "voluptate",
                                                                            Expressions: []string{
                                                                                "iure",
                                                                                "quasi",
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "culpa",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "optio",
                                                                            MaxComparisonValue: "eos",
                                                                            MetricName: "et",
                                                                            Operator: "EQUAL",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "esse",
                                                                            Expressions: []string{
                                                                                "deserunt",
                                                                                "illum",
                                                                                "nulla",
                                                                            },
                                                                            MaxComparisonValue: "iure",
                                                                            MinComparisonValue: "perferendis",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quos",
                                                                            MaxComparisonValue: "atque",
                                                                            MetricName: "repudiandae",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ab",
                                                                            Expressions: []string{
                                                                                "nobis",
                                                                                "et",
                                                                                "eveniet",
                                                                            },
                                                                            MaxComparisonValue: "dolore",
                                                                            MinComparisonValue: "voluptates",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "vel",
                                                                            MaxComparisonValue: "rerum",
                                                                            MetricName: "consequatur",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "et",
                                                                    Expressions: []string{
                                                                        "et",
                                                                        "occaecati",
                                                                    },
                                                                    MaxComparisonValue: "ratione",
                                                                    MinComparisonValue: "in",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "in",
                                                                    MaxComparisonValue: "soluta",
                                                                    MetricName: "ab",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "eos",
                                                                    Expressions: []string{
                                                                        "eos",
                                                                        "hic",
                                                                    },
                                                                    MaxComparisonValue: "est",
                                                                    MinComparisonValue: "voluptas",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "non",
                                                                    MaxComparisonValue: "nemo",
                                                                    MetricName: "dolor",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "ducimus",
                                                                    Expressions: []string{
                                                                        "tempore",
                                                                        "ab",
                                                                    },
                                                                    MaxComparisonValue: "et",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "aut",
                                                                    MaxComparisonValue: "illum",
                                                                    MetricName: "aperiam",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: true,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: false,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "at",
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "quia",
                                                                            MinComparisonValue: "officia",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ratione",
                                                                            MaxComparisonValue: "labore",
                                                                            MetricName: "cupiditate",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "sit",
                                                                            Expressions: []string{
                                                                                "voluptates",
                                                                            },
                                                                            MaxComparisonValue: "voluptate",
                                                                            MinComparisonValue: "qui",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "consequuntur",
                                                                            MaxComparisonValue: "illo",
                                                                            MetricName: "quia",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "explicabo",
                                                                            Expressions: []string{
                                                                                "animi",
                                                                                "omnis",
                                                                                "eum",
                                                                            },
                                                                            MaxComparisonValue: "recusandae",
                                                                            MinComparisonValue: "doloribus",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "culpa",
                                                                            MaxComparisonValue: "non",
                                                                            MetricName: "magnam",
                                                                            Operator: "EQUAL",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "officiis",
                                                                                "quaerat",
                                                                            },
                                                                            MaxComparisonValue: "aut",
                                                                            MinComparisonValue: "quo",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "enim",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "quibusdam",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "laudantium",
                                                                            Expressions: []string{
                                                                                "vel",
                                                                            },
                                                                            MaxComparisonValue: "quibusdam",
                                                                            MinComparisonValue: "deleniti",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sed",
                                                                            MaxComparisonValue: "hic",
                                                                            MetricName: "at",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "omnis",
                                                                            Expressions: []string{
                                                                                "eaque",
                                                                            },
                                                                            MaxComparisonValue: "nam",
                                                                            MinComparisonValue: "recusandae",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "nostrum",
                                                                            MaxComparisonValue: "repellat",
                                                                            MetricName: "dolor",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "beatae",
                                                                            Expressions: []string{
                                                                                "corrupti",
                                                                                "id",
                                                                            },
                                                                            MaxComparisonValue: "cum",
                                                                            MinComparisonValue: "voluptas",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sed",
                                                                            MaxComparisonValue: "laborum",
                                                                            MetricName: "voluptatem",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "rerum",
                                                                            Expressions: []string{
                                                                                "illo",
                                                                                "consequuntur",
                                                                                "distinctio",
                                                                            },
                                                                            MaxComparisonValue: "sunt",
                                                                            MinComparisonValue: "qui",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quo",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "et",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "officiis",
                                                                            Expressions: []string{
                                                                                "velit",
                                                                                "dolorem",
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "ut",
                                                                            MinComparisonValue: "fugiat",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "optio",
                                                                            MaxComparisonValue: "totam",
                                                                            MetricName: "consequuntur",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "modi",
                                                                    Expressions: []string{
                                                                        "qui",
                                                                    },
                                                                    MaxComparisonValue: "laborum",
                                                                    MinComparisonValue: "atque",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "fuga",
                                                                    MaxComparisonValue: "dolores",
                                                                    MetricName: "accusantium",
                                                                    Operator: "EQUAL",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "laudantium",
                                                                    Expressions: []string{
                                                                        "veniam",
                                                                        "voluptate",
                                                                        "qui",
                                                                    },
                                                                    MaxComparisonValue: "in",
                                                                    MinComparisonValue: "blanditiis",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "et",
                                                                    MaxComparisonValue: "eveniet",
                                                                    MetricName: "aut",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "inventore",
                                                                    Expressions: []string{
                                                                        "sit",
                                                                    },
                                                                    MaxComparisonValue: "aliquam",
                                                                    MinComparisonValue: "dolores",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "libero",
                                                                    MaxComparisonValue: "voluptatum",
                                                                    MetricName: "optio",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "voluptatem",
                                                                    Expressions: []string{
                                                                        "quod",
                                                                        "suscipit",
                                                                    },
                                                                    MaxComparisonValue: "error",
                                                                    MinComparisonValue: "sit",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "cum",
                                                                    MaxComparisonValue: "commodi",
                                                                    MetricName: "laudantium",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "sed",
                                                                    Expressions: []string{
                                                                        "explicabo",
                                                                    },
                                                                    MaxComparisonValue: "illo",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "vel",
                                                                    MaxComparisonValue: "iste",
                                                                    MetricName: "occaecati",
                                                                    Operator: "EQUAL",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            SegmentID: "quis",
                        },
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: "magnam",
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: false,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: true,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "rerum",
                                                                            Expressions: []string{
                                                                                "est",
                                                                                "quia",
                                                                                "voluptatibus",
                                                                            },
                                                                            MaxComparisonValue: "quas",
                                                                            MinComparisonValue: "illum",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "accusantium",
                                                                            MaxComparisonValue: "quo",
                                                                            MetricName: "veritatis",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "autem",
                                                                            Expressions: []string{
                                                                                "sit",
                                                                            },
                                                                            MaxComparisonValue: "id",
                                                                            MinComparisonValue: "error",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MetricName: "id",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "nisi",
                                                                            Expressions: []string{
                                                                                "eius",
                                                                                "quaerat",
                                                                                "quaerat",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "officia",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sint",
                                                                            MaxComparisonValue: "quo",
                                                                            MetricName: "ut",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "fuga",
                                                                            Expressions: []string{
                                                                                "explicabo",
                                                                                "adipisci",
                                                                                "voluptas",
                                                                            },
                                                                            MaxComparisonValue: "quis",
                                                                            MinComparisonValue: "tenetur",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "natus",
                                                                            MaxComparisonValue: "molestiae",
                                                                            MetricName: "culpa",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ad",
                                                                            Expressions: []string{
                                                                                "aut",
                                                                                "odit",
                                                                            },
                                                                            MaxComparisonValue: "ex",
                                                                            MinComparisonValue: "cupiditate",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aliquid",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "adipisci",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "voluptas",
                                                                            Expressions: []string{
                                                                                "debitis",
                                                                            },
                                                                            MaxComparisonValue: "animi",
                                                                            MinComparisonValue: "molestiae",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "animi",
                                                                            MaxComparisonValue: "consectetur",
                                                                            MetricName: "aspernatur",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "id",
                                                                            Expressions: []string{
                                                                                "natus",
                                                                            },
                                                                            MaxComparisonValue: "repellat",
                                                                            MinComparisonValue: "excepturi",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quo",
                                                                            MaxComparisonValue: "id",
                                                                            MetricName: "dolorum",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "et",
                                                                    Expressions: []string{
                                                                        "vitae",
                                                                        "ut",
                                                                        "debitis",
                                                                    },
                                                                    MaxComparisonValue: "ea",
                                                                    MinComparisonValue: "natus",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "deserunt",
                                                                    MaxComparisonValue: "aliquid",
                                                                    MetricName: "nihil",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "ut",
                                                                    Expressions: []string{
                                                                        "illum",
                                                                        "porro",
                                                                    },
                                                                    MaxComparisonValue: "eaque",
                                                                    MinComparisonValue: "quis",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "qui",
                                                                    MaxComparisonValue: "et",
                                                                    MetricName: "blanditiis",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "cupiditate",
                                                                    Expressions: []string{
                                                                        "deserunt",
                                                                        "dicta",
                                                                        "assumenda",
                                                                    },
                                                                    MaxComparisonValue: "officiis",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "in",
                                                                    MaxComparisonValue: "consequatur",
                                                                    MetricName: "rerum",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "vitae",
                                                                    Expressions: []string{
                                                                        "quia",
                                                                    },
                                                                    MaxComparisonValue: "consequuntur",
                                                                    MinComparisonValue: "aspernatur",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "sed",
                                                                    MaxComparisonValue: "vel",
                                                                    MetricName: "aut",
                                                                    Operator: "EQUAL",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "sequi",
                                                                    Expressions: []string{
                                                                        "consectetur",
                                                                    },
                                                                    MaxComparisonValue: "voluptatem",
                                                                    MinComparisonValue: "fugit",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "in",
                                                                    MaxComparisonValue: "iure",
                                                                    MetricName: "ullam",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "esse",
                                                                    Expressions: []string{
                                                                        "voluptatem",
                                                                    },
                                                                    MaxComparisonValue: "numquam",
                                                                    MinComparisonValue: "laudantium",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "dicta",
                                                                    MaxComparisonValue: "magnam",
                                                                    MetricName: "id",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: true,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: true,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "porro",
                                                                            Expressions: []string{
                                                                                "suscipit",
                                                                            },
                                                                            MaxComparisonValue: "accusamus",
                                                                            MinComparisonValue: "sit",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sit",
                                                                            MaxComparisonValue: "magnam",
                                                                            MetricName: "dolores",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "voluptatum",
                                                                            Expressions: []string{
                                                                                "quaerat",
                                                                                "deserunt",
                                                                            },
                                                                            MaxComparisonValue: "qui",
                                                                            MinComparisonValue: "ea",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "omnis",
                                                                            MaxComparisonValue: "ut",
                                                                            MetricName: "blanditiis",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "autem",
                                                                                "architecto",
                                                                            },
                                                                            MaxComparisonValue: "autem",
                                                                            MinComparisonValue: "nesciunt",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "ducimus",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "vel",
                                                                            Expressions: []string{
                                                                                "debitis",
                                                                            },
                                                                            MaxComparisonValue: "voluptates",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "iste",
                                                                            MaxComparisonValue: "asperiores",
                                                                            MetricName: "ea",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "maiores",
                                                                            Expressions: []string{
                                                                                "eos",
                                                                            },
                                                                            MaxComparisonValue: "assumenda",
                                                                            MinComparisonValue: "repellat",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ut",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "minima",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "quos",
                                                                            Expressions: []string{
                                                                                "accusamus",
                                                                                "rerum",
                                                                            },
                                                                            MaxComparisonValue: "eos",
                                                                            MinComparisonValue: "est",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "enim",
                                                                            MaxComparisonValue: "illum",
                                                                            MetricName: "necessitatibus",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "numquam",
                                                                                "culpa",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "provident",
                                                                            MinComparisonValue: "id",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "rerum",
                                                                            MaxComparisonValue: "sed",
                                                                            MetricName: "assumenda",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "culpa",
                                                                            Expressions: []string{
                                                                                "enim",
                                                                                "id",
                                                                                "corporis",
                                                                            },
                                                                            MaxComparisonValue: "facere",
                                                                            MinComparisonValue: "eligendi",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "velit",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "minus",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "sunt",
                                                                            Expressions: []string{
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "occaecati",
                                                                            MinComparisonValue: "quaerat",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "eum",
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MetricName: "quod",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "possimus",
                                                                            Expressions: []string{
                                                                                "id",
                                                                                "excepturi",
                                                                                "rerum",
                                                                            },
                                                                            MaxComparisonValue: "labore",
                                                                            MinComparisonValue: "nesciunt",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "minus",
                                                                            MaxComparisonValue: "velit",
                                                                            MetricName: "est",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "qui",
                                                                    Expressions: []string{
                                                                        "ea",
                                                                        "ut",
                                                                        "aspernatur",
                                                                    },
                                                                    MaxComparisonValue: "qui",
                                                                    MinComparisonValue: "praesentium",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "sit",
                                                                    MaxComparisonValue: "sed",
                                                                    MetricName: "in",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "odit",
                                                                    Expressions: []string{
                                                                        "sequi",
                                                                        "molestias",
                                                                    },
                                                                    MaxComparisonValue: "ipsa",
                                                                    MinComparisonValue: "quisquam",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quos",
                                                                    MaxComparisonValue: "beatae",
                                                                    MetricName: "repudiandae",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: false,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: false,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "voluptatem",
                                                                            Expressions: []string{
                                                                                "qui",
                                                                                "fuga",
                                                                            },
                                                                            MaxComparisonValue: "pariatur",
                                                                            MinComparisonValue: "voluptatibus",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ipsum",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "quaerat",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "saepe",
                                                                            Expressions: []string{
                                                                                "tempora",
                                                                                "voluptatibus",
                                                                                "a",
                                                                            },
                                                                            MaxComparisonValue: "qui",
                                                                            MinComparisonValue: "numquam",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "placeat",
                                                                            MaxComparisonValue: "perspiciatis",
                                                                            MetricName: "porro",
                                                                            Operator: "EQUAL",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "sunt",
                                                                            Expressions: []string{
                                                                                "aspernatur",
                                                                                "iusto",
                                                                            },
                                                                            MaxComparisonValue: "quam",
                                                                            MinComparisonValue: "maiores",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "consequatur",
                                                                            MaxComparisonValue: "in",
                                                                            MetricName: "enim",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "alias",
                                                                            Expressions: []string{
                                                                                "ea",
                                                                                "quia",
                                                                            },
                                                                            MaxComparisonValue: "labore",
                                                                            MinComparisonValue: "vitae",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "dicta",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "quam",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "itaque",
                                                                            Expressions: []string{
                                                                                "id",
                                                                            },
                                                                            MaxComparisonValue: "omnis",
                                                                            MinComparisonValue: "ratione",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "consequatur",
                                                                            MaxComparisonValue: "reprehenderit",
                                                                            MetricName: "molestiae",
                                                                            Operator: "EQUAL",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ipsam",
                                                                            Expressions: []string{
                                                                                "earum",
                                                                                "hic",
                                                                                "id",
                                                                            },
                                                                            MaxComparisonValue: "id",
                                                                            MinComparisonValue: "labore",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "eum",
                                                                            MaxComparisonValue: "exercitationem",
                                                                            MetricName: "quam",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "voluptates",
                                                                                "omnis",
                                                                            },
                                                                            MaxComparisonValue: "sint",
                                                                            MinComparisonValue: "officia",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "laboriosam",
                                                                            MaxComparisonValue: "molestiae",
                                                                            MetricName: "ipsa",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "laborum",
                                                                            Expressions: []string{
                                                                                "ab",
                                                                                "impedit",
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "eum",
                                                                            MinComparisonValue: "reiciendis",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "soluta",
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MetricName: "quis",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "atque",
                                                                            Expressions: []string{
                                                                                "ex",
                                                                                "odio",
                                                                            },
                                                                            MaxComparisonValue: "a",
                                                                            MinComparisonValue: "sed",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quo",
                                                                            MaxComparisonValue: "laboriosam",
                                                                            MetricName: "facere",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "dolorum",
                                                                            Expressions: []string{
                                                                                "voluptates",
                                                                                "natus",
                                                                            },
                                                                            MaxComparisonValue: "laboriosam",
                                                                            MinComparisonValue: "quibusdam",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "error",
                                                                            MaxComparisonValue: "voluptates",
                                                                            MetricName: "dolores",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "eos",
                                                                            Expressions: []string{
                                                                                "unde",
                                                                                "sint",
                                                                                "voluptatem",
                                                                            },
                                                                            MaxComparisonValue: "possimus",
                                                                            MinComparisonValue: "id",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "qui",
                                                                            MaxComparisonValue: "dolore",
                                                                            MetricName: "aut",
                                                                            Operator: "EQUAL",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "cum",
                                                                            Expressions: []string{
                                                                                "iure",
                                                                                "voluptatem",
                                                                                "quae",
                                                                            },
                                                                            MaxComparisonValue: "non",
                                                                            MinComparisonValue: "consectetur",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "doloribus",
                                                                            MaxComparisonValue: "illum",
                                                                            MetricName: "aut",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "aut",
                                                                            Expressions: []string{
                                                                                "porro",
                                                                            },
                                                                            MaxComparisonValue: "ut",
                                                                            MinComparisonValue: "id",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "distinctio",
                                                                            MetricName: "sint",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "rerum",
                                                                            Expressions: []string{
                                                                                "cum",
                                                                            },
                                                                            MaxComparisonValue: "ratione",
                                                                            MinComparisonValue: "eum",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "nisi",
                                                                            MetricName: "velit",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "consequatur",
                                                                    Expressions: []string{
                                                                        "sint",
                                                                        "iusto",
                                                                    },
                                                                    MaxComparisonValue: "deleniti",
                                                                    MinComparisonValue: "aperiam",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "eius",
                                                                    MaxComparisonValue: "debitis",
                                                                    MetricName: "sit",
                                                                    Operator: "EQUAL",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "voluptate",
                                                                    Expressions: []string{
                                                                        "earum",
                                                                        "vel",
                                                                        "velit",
                                                                    },
                                                                    MaxComparisonValue: "assumenda",
                                                                    MinComparisonValue: "nemo",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "sed",
                                                                    MaxComparisonValue: "aut",
                                                                    MetricName: "pariatur",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "alias",
                                                                    Expressions: []string{
                                                                        "quasi",
                                                                        "minus",
                                                                        "optio",
                                                                    },
                                                                    MaxComparisonValue: "deserunt",
                                                                    MinComparisonValue: "corporis",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "recusandae",
                                                                    MaxComparisonValue: "pariatur",
                                                                    MetricName: "pariatur",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "officiis",
                                                                    Expressions: []string{
                                                                        "repudiandae",
                                                                        "similique",
                                                                    },
                                                                    MaxComparisonValue: "et",
                                                                    MinComparisonValue: "itaque",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "minima",
                                                                    MaxComparisonValue: "placeat",
                                                                    MetricName: "blanditiis",
                                                                    Operator: "EQUAL",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "et",
                                                                    Expressions: []string{
                                                                        "est",
                                                                    },
                                                                    MaxComparisonValue: "doloremque",
                                                                    MinComparisonValue: "cumque",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "error",
                                                                    MaxComparisonValue: "officia",
                                                                    MetricName: "illo",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "aut",
                                                                    Expressions: []string{
                                                                        "sit",
                                                                        "dolorum",
                                                                        "soluta",
                                                                    },
                                                                    MaxComparisonValue: "dicta",
                                                                    MinComparisonValue: "perspiciatis",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "tenetur",
                                                                    MaxComparisonValue: "quasi",
                                                                    MetricName: "consequuntur",
                                                                    Operator: "EQUAL",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "soluta",
                                                                    Expressions: []string{
                                                                        "iusto",
                                                                    },
                                                                    MaxComparisonValue: "consequatur",
                                                                    MinComparisonValue: "eum",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "nihil",
                                                                    MaxComparisonValue: "ut",
                                                                    MetricName: "qui",
                                                                    Operator: "EQUAL",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                UserSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: false,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: true,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "magnam",
                                                                            Expressions: []string{
                                                                                "reiciendis",
                                                                                "ut",
                                                                                "adipisci",
                                                                            },
                                                                            MaxComparisonValue: "repellat",
                                                                            MinComparisonValue: "quibusdam",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "cum",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "modi",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "temporibus",
                                                                            Expressions: []string{
                                                                                "fugit",
                                                                                "omnis",
                                                                                "aperiam",
                                                                            },
                                                                            MaxComparisonValue: "ipsam",
                                                                            MinComparisonValue: "tenetur",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "rerum",
                                                                            MaxComparisonValue: "laborum",
                                                                            MetricName: "sapiente",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "incidunt",
                                                                            Expressions: []string{
                                                                                "adipisci",
                                                                                "ut",
                                                                                "blanditiis",
                                                                            },
                                                                            MaxComparisonValue: "saepe",
                                                                            MinComparisonValue: "nesciunt",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "labore",
                                                                            MaxComparisonValue: "illum",
                                                                            MetricName: "omnis",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "eius",
                                                                            Expressions: []string{
                                                                                "quisquam",
                                                                                "possimus",
                                                                                "sed",
                                                                            },
                                                                            MaxComparisonValue: "labore",
                                                                            MinComparisonValue: "nemo",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quam",
                                                                            MaxComparisonValue: "libero",
                                                                            MetricName: "voluptate",
                                                                            Operator: "EQUAL",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "numquam",
                                                                            Expressions: []string{
                                                                                "cumque",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "voluptatum",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "non",
                                                                            MaxComparisonValue: "totam",
                                                                            MetricName: "est",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "accusantium",
                                                                            Expressions: []string{
                                                                                "voluptas",
                                                                            },
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MinComparisonValue: "maxime",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "eum",
                                                                            MaxComparisonValue: "modi",
                                                                            MetricName: "quis",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "neque",
                                                                            Expressions: []string{
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "voluptas",
                                                                            MinComparisonValue: "qui",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "accusamus",
                                                                            MaxComparisonValue: "necessitatibus",
                                                                            MetricName: "provident",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "repudiandae",
                                                                    Expressions: []string{
                                                                        "eum",
                                                                        "aut",
                                                                        "quia",
                                                                    },
                                                                    MaxComparisonValue: "velit",
                                                                    MinComparisonValue: "unde",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "libero",
                                                                    MaxComparisonValue: "enim",
                                                                    MetricName: "exercitationem",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "est",
                                                                    Expressions: []string{
                                                                        "commodi",
                                                                        "impedit",
                                                                    },
                                                                    MaxComparisonValue: "ipsa",
                                                                    MinComparisonValue: "ut",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "aut",
                                                                    MaxComparisonValue: "aut",
                                                                    MetricName: "consequuntur",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            SegmentID: "voluptatem",
                        },
                    },
                    ViewID: "molestiae",
                },
            },
            UseResourceQuotas: false,
        },
    }
    
    res, err := s.Reports.AnalyticsreportingReportsBatchGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReportsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### reports

* `AnalyticsreportingReportsBatchGet` - Returns the Analytics data.

### userActivity

* `AnalyticsreportingUserActivitySearch` - Returns User Activity data.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
