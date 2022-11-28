# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { AnalyticsdataPropertiesBatchRunPivotReportsRequest, AnalyticsdataPropertiesBatchRunPivotReportsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AnalyticsdataPropertiesBatchRunPivotReportsRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  pathParams: {
    property: "numquam",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "et",
    alt: "json",
    callback: "excepturi",
    fields: "odit",
    key: "voluptas",
    oauthToken: "illo",
    prettyPrint: true,
    quotaUser: "odit",
    uploadType: "et",
    uploadProtocol: "perferendis",
  },
  request: {
    requests: [
      {
        cohortSpec: {
          cohortReportSettings: {
            accumulate: false,
          },
          cohorts: [
            {
              dateRange: {
                endDate: "porro",
                name: "et",
                startDate: "maiores",
              },
              dimension: "sed",
              name: "recusandae",
            },
          ],
          cohortsRange: {
            endOffset: 3302332600328048071,
            granularity: "GRANULARITY_UNSPECIFIED",
            startOffset: 3562849057074415581,
          },
        },
        currencyCode: "beatae",
        dateRanges: [
          {
            endDate: "corporis",
            name: "ea",
            startDate: "sunt",
          },
          {
            endDate: "eveniet",
            name: "maxime",
            startDate: "expedita",
          },
          {
            endDate: "neque",
            name: "est",
            startDate: "ad",
          },
        ],
        dimensionFilter: {
          andGroup: {
            expressions: [
              {
              
              },
              {
              
              },
            ],
          },
          filter: {
            betweenFilter: {
              fromValue: {
                doubleValue: 52.200001,
                int64Value: "ducimus",
              },
              toValue: {
                doubleValue: 5.100000,
                int64Value: "sit",
              },
            },
            fieldName: "voluptatem",
            inListFilter: {
              caseSensitive: true,
              values: [
                "quisquam",
              ],
            },
            numericFilter: {
              operation: "GREATER_THAN_OR_EQUAL",
              value: {
                doubleValue: 12.200000,
                int64Value: "voluptatibus",
              },
            },
            stringFilter: {
              caseSensitive: false,
              matchType: "ENDS_WITH",
              value: "sed",
            },
          },
          notExpression: {
          
          },
          orGroup: {
            expressions: [
              {
              
              },
              {
              
              },
            ],
          },
        },
        dimensions: [
          {
            dimensionExpression: {
              concatenate: {
                delimiter: "nulla",
                dimensionNames: [
                  "magnam",
                  "dolores",
                  "vel",
                ],
              },
              lowerCase: {
                dimensionName: "consequatur",
              },
              upperCase: {
                dimensionName: "aperiam",
              },
            },
            name: "rerum",
          },
        ],
        keepEmptyRows: false,
        metricFilter: {
          andGroup: {
            expressions: [
              {
              
              },
            ],
          },
          filter: {
            betweenFilter: {
              fromValue: {
                doubleValue: 7.200000,
                int64Value: "nesciunt",
              },
              toValue: {
                doubleValue: 74.099998,
                int64Value: "sequi",
              },
            },
            fieldName: "voluptas",
            inListFilter: {
              caseSensitive: false,
              values: [
                "similique",
                "facilis",
                "sit",
              ],
            },
            numericFilter: {
              operation: "GREATER_THAN_OR_EQUAL",
              value: {
                doubleValue: 7.200000,
                int64Value: "voluptatum",
              },
            },
            stringFilter: {
              caseSensitive: true,
              matchType: "PARTIAL_REGEXP",
              value: "illum",
            },
          },
          notExpression: {
          
          },
          orGroup: {
            expressions: [
              {
              
              },
              {
              
              },
              {
              
              },
            ],
          },
        },
        metrics: [
          {
            expression: "magni",
            invisible: true,
            name: "ratione",
          },
          {
            expression: "velit",
            invisible: true,
            name: "magni",
          },
          {
            expression: "repellat",
            invisible: true,
            name: "animi",
          },
        ],
        pivots: [
          {
            fieldNames: [
              "sequi",
            ],
            limit: "voluptatibus",
            metricAggregations: [
              "TOTAL",
              "COUNT",
            ],
            offset: "rerum",
            orderBys: [
              {
                desc: false,
                dimension: {
                  dimensionName: "omnis",
                  orderType: "NUMERIC",
                },
                metric: {
                  metricName: "quisquam",
                },
                pivot: {
                  metricName: "maxime",
                  pivotSelections: [
                    {
                      dimensionName: "eaque",
                      dimensionValue: "voluptatibus",
                    },
                  ],
                },
              },
              {
                desc: true,
                dimension: {
                  dimensionName: "iure",
                  orderType: "ALPHANUMERIC",
                },
                metric: {
                  metricName: "quo",
                },
                pivot: {
                  metricName: "qui",
                  pivotSelections: [
                    {
                      dimensionName: "vitae",
                      dimensionValue: "minus",
                    },
                    {
                      dimensionName: "recusandae",
                      dimensionValue: "ut",
                    },
                    {
                      dimensionName: "tenetur",
                      dimensionValue: "eius",
                    },
                  ],
                },
              },
            ],
          },
          {
            fieldNames: [
              "sit",
            ],
            limit: "doloribus",
            metricAggregations: [
              "TOTAL",
              "MAXIMUM",
            ],
            offset: "saepe",
            orderBys: [
              {
                desc: true,
                dimension: {
                  dimensionName: "ut",
                  orderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                },
                metric: {
                  metricName: "fugiat",
                },
                pivot: {
                  metricName: "sit",
                  pivotSelections: [
                    {
                      dimensionName: "velit",
                      dimensionValue: "qui",
                    },
                    {
                      dimensionName: "quod",
                      dimensionValue: "dignissimos",
                    },
                    {
                      dimensionName: "fugit",
                      dimensionValue: "non",
                    },
                  ],
                },
              },
              {
                desc: true,
                dimension: {
                  dimensionName: "eveniet",
                  orderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                },
                metric: {
                  metricName: "quam",
                },
                pivot: {
                  metricName: "molestiae",
                  pivotSelections: [
                    {
                      dimensionName: "et",
                      dimensionValue: "aut",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "perspiciatis",
                  orderType: "ORDER_TYPE_UNSPECIFIED",
                },
                metric: {
                  metricName: "quis",
                },
                pivot: {
                  metricName: "tempora",
                  pivotSelections: [
                    {
                      dimensionName: "in",
                      dimensionValue: "dicta",
                    },
                  ],
                },
              },
            ],
          },
          {
            fieldNames: [
              "explicabo",
            ],
            limit: "molestiae",
            metricAggregations: [
              "MAXIMUM",
              "METRIC_AGGREGATION_UNSPECIFIED",
            ],
            offset: "eaque",
            orderBys: [
              {
                desc: true,
                dimension: {
                  dimensionName: "unde",
                  orderType: "NUMERIC",
                },
                metric: {
                  metricName: "iusto",
                },
                pivot: {
                  metricName: "quas",
                  pivotSelections: [
                    {
                      dimensionName: "dignissimos",
                      dimensionValue: "vel",
                    },
                    {
                      dimensionName: "omnis",
                      dimensionValue: "rerum",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "quasi",
                  orderType: "ALPHANUMERIC",
                },
                metric: {
                  metricName: "ratione",
                },
                pivot: {
                  metricName: "aliquam",
                  pivotSelections: [
                    {
                      dimensionName: "sint",
                      dimensionValue: "deserunt",
                    },
                    {
                      dimensionName: "et",
                      dimensionValue: "magnam",
                    },
                  ],
                },
              },
            ],
          },
        ],
        property: "ad",
        returnPropertyQuota: true,
      },
      {
        cohortSpec: {
          cohortReportSettings: {
            accumulate: false,
          },
          cohorts: [
            {
              dateRange: {
                endDate: "minima",
                name: "rerum",
                startDate: "aut",
              },
              dimension: "fugiat",
              name: "facere",
            },
            {
              dateRange: {
                endDate: "non",
                name: "consectetur",
                startDate: "eum",
              },
              dimension: "repellendus",
              name: "inventore",
            },
            {
              dateRange: {
                endDate: "est",
                name: "sunt",
                startDate: "recusandae",
              },
              dimension: "reprehenderit",
              name: "ut",
            },
          ],
          cohortsRange: {
            endOffset: 2385751255956319642,
            granularity: "GRANULARITY_UNSPECIFIED",
            startOffset: 4173885397853267836,
          },
        },
        currencyCode: "aut",
        dateRanges: [
          {
            endDate: "laborum",
            name: "magnam",
            startDate: "praesentium",
          },
        ],
        dimensionFilter: {
          andGroup: {
            expressions: [
              {
              
              },
              {
              
              },
              {
              
              },
            ],
          },
          filter: {
            betweenFilter: {
              fromValue: {
                doubleValue: 73.199997,
                int64Value: "iste",
              },
              toValue: {
                doubleValue: 4.200000,
                int64Value: "consequatur",
              },
            },
            fieldName: "quam",
            inListFilter: {
              caseSensitive: false,
              values: [
                "architecto",
                "ut",
              ],
            },
            numericFilter: {
              operation: "LESS_THAN_OR_EQUAL",
              value: {
                doubleValue: 45.200001,
                int64Value: "et",
              },
            },
            stringFilter: {
              caseSensitive: true,
              matchType: "MATCH_TYPE_UNSPECIFIED",
              value: "minima",
            },
          },
          notExpression: {
          
          },
          orGroup: {
            expressions: [
              {
              
              },
            ],
          },
        },
        dimensions: [
          {
            dimensionExpression: {
              concatenate: {
                delimiter: "mollitia",
                dimensionNames: [
                  "autem",
                  "sunt",
                  "consequuntur",
                ],
              },
              lowerCase: {
                dimensionName: "est",
              },
              upperCase: {
                dimensionName: "dicta",
              },
            },
            name: "asperiores",
          },
          {
            dimensionExpression: {
              concatenate: {
                delimiter: "saepe",
                dimensionNames: [
                  "quidem",
                  "reprehenderit",
                  "repudiandae",
                ],
              },
              lowerCase: {
                dimensionName: "consectetur",
              },
              upperCase: {
                dimensionName: "fugit",
              },
            },
            name: "illum",
          },
        ],
        keepEmptyRows: false,
        metricFilter: {
          andGroup: {
            expressions: [
              {
              
              },
            ],
          },
          filter: {
            betweenFilter: {
              fromValue: {
                doubleValue: 21.100000,
                int64Value: "natus",
              },
              toValue: {
                doubleValue: 59.099998,
                int64Value: "consequatur",
              },
            },
            fieldName: "quia",
            inListFilter: {
              caseSensitive: true,
              values: [
                "numquam",
                "autem",
              ],
            },
            numericFilter: {
              operation: "EQUAL",
              value: {
                doubleValue: 48.200001,
                int64Value: "modi",
              },
            },
            stringFilter: {
              caseSensitive: true,
              matchType: "FULL_REGEXP",
              value: "autem",
            },
          },
          notExpression: {
          
          },
          orGroup: {
            expressions: [
              {
              
              },
              {
              
              },
              {
              
              },
            ],
          },
        },
        metrics: [
          {
            expression: "illo",
            invisible: true,
            name: "corrupti",
          },
        ],
        pivots: [
          {
            fieldNames: [
              "aut",
              "enim",
              "et",
            ],
            limit: "provident",
            metricAggregations: [
              "METRIC_AGGREGATION_UNSPECIFIED",
              "MINIMUM",
            ],
            offset: "necessitatibus",
            orderBys: [
              {
                desc: true,
                dimension: {
                  dimensionName: "nisi",
                  orderType: "ALPHANUMERIC",
                },
                metric: {
                  metricName: "consequatur",
                },
                pivot: {
                  metricName: "quo",
                  pivotSelections: [
                    {
                      dimensionName: "voluptatem",
                      dimensionValue: "fuga",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "soluta",
                  orderType: "ORDER_TYPE_UNSPECIFIED",
                },
                metric: {
                  metricName: "ea",
                },
                pivot: {
                  metricName: "tempora",
                  pivotSelections: [
                    {
                      dimensionName: "assumenda",
                      dimensionValue: "voluptatibus",
                    },
                    {
                      dimensionName: "dolorem",
                      dimensionValue: "ea",
                    },
                  ],
                },
              },
            ],
          },
          {
            fieldNames: [
              "adipisci",
              "enim",
              "deserunt",
            ],
            limit: "necessitatibus",
            metricAggregations: [
              "TOTAL",
              "METRIC_AGGREGATION_UNSPECIFIED",
              "MAXIMUM",
            ],
            offset: "commodi",
            orderBys: [
              {
                desc: true,
                dimension: {
                  dimensionName: "voluptatum",
                  orderType: "NUMERIC",
                },
                metric: {
                  metricName: "velit",
                },
                pivot: {
                  metricName: "ex",
                  pivotSelections: [
                    {
                      dimensionName: "eligendi",
                      dimensionValue: "voluptatem",
                    },
                  ],
                },
              },
            ],
          },
        ],
        property: "eaque",
        returnPropertyQuota: false,
      },
      {
        cohortSpec: {
          cohortReportSettings: {
            accumulate: true,
          },
          cohorts: [
            {
              dateRange: {
                endDate: "dignissimos",
                name: "doloremque",
                startDate: "odio",
              },
              dimension: "et",
              name: "beatae",
            },
            {
              dateRange: {
                endDate: "occaecati",
                name: "autem",
                startDate: "quod",
              },
              dimension: "quidem",
              name: "culpa",
            },
          ],
          cohortsRange: {
            endOffset: 7688557147229530410,
            granularity: "MONTHLY",
            startOffset: 7180476382161094759,
          },
        },
        currencyCode: "autem",
        dateRanges: [
          {
            endDate: "ducimus",
            name: "sunt",
            startDate: "aut",
          },
          {
            endDate: "molestiae",
            name: "architecto",
            startDate: "alias",
          },
          {
            endDate: "et",
            name: "suscipit",
            startDate: "unde",
          },
        ],
        dimensionFilter: {
          andGroup: {
            expressions: [
              {
              
              },
            ],
          },
          filter: {
            betweenFilter: {
              fromValue: {
                doubleValue: 97.099998,
                int64Value: "aspernatur",
              },
              toValue: {
                doubleValue: 49.099998,
                int64Value: "sed",
              },
            },
            fieldName: "non",
            inListFilter: {
              caseSensitive: false,
              values: [
                "assumenda",
                "neque",
              ],
            },
            numericFilter: {
              operation: "GREATER_THAN",
              value: {
                doubleValue: 27.200001,
                int64Value: "molestiae",
              },
            },
            stringFilter: {
              caseSensitive: false,
              matchType: "FULL_REGEXP",
              value: "occaecati",
            },
          },
          notExpression: {
          
          },
          orGroup: {
            expressions: [
              {
              
              },
              {
              
              },
              {
              
              },
            ],
          },
        },
        dimensions: [
          {
            dimensionExpression: {
              concatenate: {
                delimiter: "fuga",
                dimensionNames: [
                  "totam",
                  "libero",
                  "eligendi",
                ],
              },
              lowerCase: {
                dimensionName: "id",
              },
              upperCase: {
                dimensionName: "aperiam",
              },
            },
            name: "cum",
          },
          {
            dimensionExpression: {
              concatenate: {
                delimiter: "assumenda",
                dimensionNames: [
                  "omnis",
                  "commodi",
                  "doloremque",
                ],
              },
              lowerCase: {
                dimensionName: "quis",
              },
              upperCase: {
                dimensionName: "iste",
              },
            },
            name: "molestias",
          },
        ],
        keepEmptyRows: true,
        metricFilter: {
          andGroup: {
            expressions: [
              {
              
              },
              {
              
              },
              {
              
              },
            ],
          },
          filter: {
            betweenFilter: {
              fromValue: {
                doubleValue: 40.099998,
                int64Value: "omnis",
              },
              toValue: {
                doubleValue: 18.200001,
                int64Value: "quo",
              },
            },
            fieldName: "quo",
            inListFilter: {
              caseSensitive: false,
              values: [
                "laborum",
                "incidunt",
              ],
            },
            numericFilter: {
              operation: "GREATER_THAN",
              value: {
                doubleValue: 3.100000,
                int64Value: "quas",
              },
            },
            stringFilter: {
              caseSensitive: false,
              matchType: "CONTAINS",
              value: "temporibus",
            },
          },
          notExpression: {
          
          },
          orGroup: {
            expressions: [
              {
              
              },
            ],
          },
        },
        metrics: [
          {
            expression: "id",
            invisible: false,
            name: "facere",
          },
        ],
        pivots: [
          {
            fieldNames: [
              "illo",
            ],
            limit: "ut",
            metricAggregations: [
              "COUNT",
              "MAXIMUM",
              "COUNT",
            ],
            offset: "non",
            orderBys: [
              {
                desc: true,
                dimension: {
                  dimensionName: "aut",
                  orderType: "ALPHANUMERIC",
                },
                metric: {
                  metricName: "suscipit",
                },
                pivot: {
                  metricName: "et",
                  pivotSelections: [
                    {
                      dimensionName: "eos",
                      dimensionValue: "autem",
                    },
                    {
                      dimensionName: "qui",
                      dimensionValue: "vel",
                    },
                    {
                      dimensionName: "quo",
                      dimensionValue: "minus",
                    },
                  ],
                },
              },
            ],
          },
          {
            fieldNames: [
              "id",
            ],
            limit: "molestias",
            metricAggregations: [
              "MAXIMUM",
            ],
            offset: "quam",
            orderBys: [
              {
                desc: false,
                dimension: {
                  dimensionName: "quae",
                  orderType: "NUMERIC",
                },
                metric: {
                  metricName: "omnis",
                },
                pivot: {
                  metricName: "ut",
                  pivotSelections: [
                    {
                      dimensionName: "libero",
                      dimensionValue: "quaerat",
                    },
                    {
                      dimensionName: "ut",
                      dimensionValue: "sed",
                    },
                  ],
                },
              },
            ],
          },
          {
            fieldNames: [
              "nesciunt",
            ],
            limit: "incidunt",
            metricAggregations: [
              "MAXIMUM",
              "METRIC_AGGREGATION_UNSPECIFIED",
              "MINIMUM",
            ],
            offset: "aut",
            orderBys: [
              {
                desc: false,
                dimension: {
                  dimensionName: "tenetur",
                  orderType: "NUMERIC",
                },
                metric: {
                  metricName: "cum",
                },
                pivot: {
                  metricName: "illum",
                  pivotSelections: [
                    {
                      dimensionName: "et",
                      dimensionValue: "quia",
                    },
                  ],
                },
              },
              {
                desc: true,
                dimension: {
                  dimensionName: "enim",
                  orderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                },
                metric: {
                  metricName: "odio",
                },
                pivot: {
                  metricName: "velit",
                  pivotSelections: [
                    {
                      dimensionName: "est",
                      dimensionValue: "ipsam",
                    },
                    {
                      dimensionName: "ut",
                      dimensionValue: "quod",
                    },
                  ],
                },
              },
            ],
          },
        ],
        property: "dolor",
        returnPropertyQuota: true,
      },
    ],
  },
};

sdk.properties.analyticsdataPropertiesBatchRunPivotReports(req).then((res: AnalyticsdataPropertiesBatchRunPivotReportsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### properties

* `analyticsdataPropertiesBatchRunPivotReports` - Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.
* `analyticsdataPropertiesBatchRunReports` - Returns multiple reports in a batch. All reports must be for the same GA4 Property.
* `analyticsdataPropertiesCheckCompatibility` - This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.
* `analyticsdataPropertiesGetMetadata` - Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.
* `analyticsdataPropertiesRunPivotReport` - Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.
* `analyticsdataPropertiesRunRealtimeReport` - Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).
* `analyticsdataPropertiesRunReport` - Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
