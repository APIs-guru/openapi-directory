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
import { AnalyticsreportingReportsBatchGetRequest, AnalyticsreportingReportsBatchGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AnalyticsreportingReportsBatchGetRequest = {
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
  queryParams: {
    dollarXgafv: "2",
    accessToken: "dolor",
    alt: "media",
    callback: "eius",
    fields: "minus",
    key: "eaque",
    oauthToken: "ut",
    prettyPrint: true,
    quotaUser: "reiciendis",
    uploadType: "doloribus",
    uploadProtocol: "in",
  },
  request: {
    reportRequests: [
      {
        cohortGroup: {
          cohorts: [
            {
              dateRange: {
                endDate: "eius",
                startDate: "ab",
              },
              name: "et",
              type: "UNSPECIFIED_COHORT_TYPE",
            },
            {
              dateRange: {
                endDate: "ut",
                startDate: "ut",
              },
              name: "ea",
              type: "UNSPECIFIED_COHORT_TYPE",
            },
            {
              dateRange: {
                endDate: "velit",
                startDate: "et",
              },
              name: "doloribus",
              type: "FIRST_VISIT_DATE",
            },
          ],
          lifetimeValue: true,
        },
        dateRanges: [
          {
            endDate: "voluptates",
            startDate: "praesentium",
          },
        ],
        dimensionFilterClauses: [
          {
            filters: [
              {
                caseSensitive: true,
                dimensionName: "consequatur",
                expressions: [
                  "quas",
                ],
                not: false,
                operator: "ENDS_WITH",
              },
              {
                caseSensitive: false,
                dimensionName: "non",
                expressions: [
                  "eum",
                ],
                not: true,
                operator: "EXACT",
              },
              {
                caseSensitive: false,
                dimensionName: "minima",
                expressions: [
                  "vel",
                  "voluptatem",
                  "repellendus",
                ],
                not: false,
                operator: "ENDS_WITH",
              },
            ],
            operator: "AND",
          },
          {
            filters: [
              {
                caseSensitive: true,
                dimensionName: "modi",
                expressions: [
                  "porro",
                  "rerum",
                ],
                not: true,
                operator: "NUMERIC_GREATER_THAN",
              },
            ],
            operator: "OR",
          },
          {
            filters: [
              {
                caseSensitive: true,
                dimensionName: "natus",
                expressions: [
                  "error",
                ],
                not: true,
                operator: "OPERATOR_UNSPECIFIED",
              },
              {
                caseSensitive: false,
                dimensionName: "provident",
                expressions: [
                  "ut",
                ],
                not: true,
                operator: "NUMERIC_GREATER_THAN",
              },
              {
                caseSensitive: false,
                dimensionName: "voluptatem",
                expressions: [
                  "quam",
                ],
                not: false,
                operator: "REGEXP",
              },
            ],
            operator: "OPERATOR_UNSPECIFIED",
          },
        ],
        dimensions: [
          {
            histogramBuckets: [
              "maiores",
              "qui",
            ],
            name: "dolorum",
          },
          {
            histogramBuckets: [
              "sed",
              "excepturi",
            ],
            name: "voluptatibus",
          },
          {
            histogramBuckets: [
              "consectetur",
            ],
            name: "aperiam",
          },
        ],
        filtersExpression: "aspernatur",
        hideTotals: false,
        hideValueRanges: false,
        includeEmptyRows: false,
        metricFilterClauses: [
          {
            filters: [
              {
                comparisonValue: "unde",
                metricName: "accusantium",
                not: true,
                operator: "GREATER_THAN",
              },
              {
                comparisonValue: "repudiandae",
                metricName: "voluptas",
                not: true,
                operator: "LESS_THAN",
              },
            ],
            operator: "OPERATOR_UNSPECIFIED",
          },
          {
            filters: [
              {
                comparisonValue: "eum",
                metricName: "ut",
                not: false,
                operator: "OPERATOR_UNSPECIFIED",
              },
              {
                comparisonValue: "doloribus",
                metricName: "dolore",
                not: true,
                operator: "GREATER_THAN",
              },
            ],
            operator: "OR",
          },
          {
            filters: [
              {
                comparisonValue: "occaecati",
                metricName: "fugiat",
                not: false,
                operator: "GREATER_THAN",
              },
            ],
            operator: "AND",
          },
        ],
        metrics: [
          {
            alias: "harum",
            expression: "aut",
            formattingType: "CURRENCY",
          },
        ],
        orderBys: [
          {
            fieldName: "omnis",
            orderType: "DIMENSION_AS_INTEGER",
            sortOrder: "DESCENDING",
          },
          {
            fieldName: "nemo",
            orderType: "DELTA",
            sortOrder: "DESCENDING",
          },
        ],
        pageSize: 8363872708664577317,
        pageToken: "dolor",
        pivots: [
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "iusto",
                    expressions: [
                      "quos",
                      "est",
                      "similique",
                    ],
                    not: true,
                    operator: "IN_LIST",
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "officia",
                    expressions: [
                      "at",
                    ],
                    not: false,
                    operator: "REGEXP",
                  },
                ],
                operator: "OR",
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "atque",
                  "tempore",
                  "ex",
                ],
                name: "rem",
              },
              {
                histogramBuckets: [
                  "corrupti",
                  "at",
                ],
                name: "natus",
              },
            ],
            maxGroupCount: 1929143766071761731,
            metrics: [
              {
                alias: "et",
                expression: "deleniti",
                formattingType: "CURRENCY",
              },
            ],
            startGroup: 407870844475907848,
          },
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "maiores",
                    expressions: [
                      "non",
                      "quo",
                    ],
                    not: true,
                    operator: "NUMERIC_EQUAL",
                  },
                ],
                operator: "OPERATOR_UNSPECIFIED",
              },
              {
                filters: [
                  {
                    caseSensitive: true,
                    dimensionName: "accusamus",
                    expressions: [
                      "enim",
                    ],
                    not: true,
                    operator: "IN_LIST",
                  },
                ],
                operator: "OPERATOR_UNSPECIFIED",
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "excepturi",
                ],
                name: "quia",
              },
              {
                histogramBuckets: [
                  "totam",
                  "animi",
                  "illum",
                ],
                name: "ea",
              },
            ],
            maxGroupCount: 3468176560740997316,
            metrics: [
              {
                alias: "repellat",
                expression: "ea",
                formattingType: "CURRENCY",
              },
            ],
            startGroup: 7411902161399948188,
          },
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: true,
                    dimensionName: "vero",
                    expressions: [
                      "atque",
                      "placeat",
                    ],
                    not: false,
                    operator: "OPERATOR_UNSPECIFIED",
                  },
                  {
                    caseSensitive: true,
                    dimensionName: "enim",
                    expressions: [
                      "molestias",
                    ],
                    not: true,
                    operator: "PARTIAL",
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "inventore",
                    expressions: [
                      "enim",
                    ],
                    not: false,
                    operator: "PARTIAL",
                  },
                ],
                operator: "OPERATOR_UNSPECIFIED",
              },
              {
                filters: [
                  {
                    caseSensitive: true,
                    dimensionName: "quia",
                    expressions: [
                      "porro",
                    ],
                    not: true,
                    operator: "NUMERIC_LESS_THAN",
                  },
                  {
                    caseSensitive: true,
                    dimensionName: "placeat",
                    expressions: [
                      "quia",
                      "et",
                    ],
                    not: false,
                    operator: "NUMERIC_GREATER_THAN",
                  },
                ],
                operator: "OR",
              },
              {
                filters: [
                  {
                    caseSensitive: true,
                    dimensionName: "saepe",
                    expressions: [
                      "itaque",
                      "dignissimos",
                    ],
                    not: true,
                    operator: "PARTIAL",
                  },
                  {
                    caseSensitive: true,
                    dimensionName: "ut",
                    expressions: [
                      "et",
                      "enim",
                      "sapiente",
                    ],
                    not: true,
                    operator: "OPERATOR_UNSPECIFIED",
                  },
                ],
                operator: "AND",
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "aut",
                  "dolorem",
                  "nisi",
                ],
                name: "quod",
              },
            ],
            maxGroupCount: 6215984325955635864,
            metrics: [
              {
                alias: "blanditiis",
                expression: "et",
                formattingType: "FLOAT",
              },
              {
                alias: "facere",
                expression: "et",
                formattingType: "FLOAT",
              },
            ],
            startGroup: 7567746428576195883,
          },
        ],
        samplingLevel: "SMALL",
        segments: [
          {
            dynamicSegment: {
              name: "voluptatum",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "suscipit",
                                    expressions: [
                                      "eaque",
                                      "nihil",
                                    ],
                                    maxComparisonValue: "sint",
                                    minComparisonValue: "natus",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sunt",
                                    maxComparisonValue: "quam",
                                    metricName: "nesciunt",
                                    operator: "EQUAL",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "atque",
                                    expressions: [
                                      "suscipit",
                                    ],
                                    maxComparisonValue: "repudiandae",
                                    minComparisonValue: "modi",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "expedita",
                                    maxComparisonValue: "in",
                                    metricName: "aut",
                                    operator: "GREATER_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ut",
                                    expressions: [
                                      "voluptas",
                                      "facilis",
                                      "quos",
                                    ],
                                    maxComparisonValue: "sapiente",
                                    minComparisonValue: "beatae",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "vitae",
                                    maxComparisonValue: "et",
                                    metricName: "molestiae",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "deleniti",
                                    expressions: [
                                      "consequuntur",
                                      "officia",
                                    ],
                                    maxComparisonValue: "repellat",
                                    minComparisonValue: "esse",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "est",
                                    maxComparisonValue: "et",
                                    metricName: "ab",
                                    operator: "EQUAL",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "rem",
                                expressions: [
                                  "quisquam",
                                  "sunt",
                                ],
                                maxComparisonValue: "nam",
                                minComparisonValue: "omnis",
                                operator: "OPERATOR_UNSPECIFIED",
                              },
                              metricFilter: {
                                comparisonValue: "cupiditate",
                                maxComparisonValue: "omnis",
                                metricName: "dolores",
                                operator: "EQUAL",
                                scope: "HIT",
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "quia",
                                expressions: [
                                  "ipsum",
                                  "vel",
                                  "repellendus",
                                ],
                                maxComparisonValue: "autem",
                                minComparisonValue: "vel",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "repudiandae",
                                maxComparisonValue: "voluptas",
                                metricName: "omnis",
                                operator: "EQUAL",
                                scope: "USER",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "aspernatur",
                                expressions: [
                                  "occaecati",
                                  "porro",
                                ],
                                maxComparisonValue: "dicta",
                                minComparisonValue: "cupiditate",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "est",
                                maxComparisonValue: "nemo",
                                metricName: "eos",
                                operator: "BETWEEN",
                                scope: "HIT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "id",
                                expressions: [
                                  "ipsam",
                                ],
                                maxComparisonValue: "nihil",
                                minComparisonValue: "vel",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "voluptas",
                                maxComparisonValue: "ipsam",
                                metricName: "est",
                                operator: "BETWEEN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "sunt",
                                expressions: [
                                  "voluptate",
                                  "omnis",
                                  "hic",
                                ],
                                maxComparisonValue: "voluptatem",
                                minComparisonValue: "eaque",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "nesciunt",
                                maxComparisonValue: "voluptas",
                                metricName: "non",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "HIT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "deleniti",
                                expressions: [
                                  "modi",
                                ],
                                maxComparisonValue: "quis",
                                minComparisonValue: "id",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "dolorum",
                                maxComparisonValue: "repellat",
                                metricName: "nihil",
                                operator: "EQUAL",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "aut",
                                expressions: [
                                  "porro",
                                  "reprehenderit",
                                  "magni",
                                ],
                                maxComparisonValue: "ab",
                                minComparisonValue: "eligendi",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "qui",
                                maxComparisonValue: "omnis",
                                metricName: "ut",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              userSegment: {
                segmentFilters: [
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "accusamus",
                                    expressions: [
                                      "aut",
                                      "ut",
                                    ],
                                    maxComparisonValue: "dicta",
                                    minComparisonValue: "est",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatum",
                                    maxComparisonValue: "qui",
                                    metricName: "odit",
                                    operator: "BETWEEN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "sint",
                                    expressions: [
                                      "rem",
                                      "quod",
                                      "quia",
                                    ],
                                    maxComparisonValue: "magni",
                                    minComparisonValue: "enim",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ut",
                                    maxComparisonValue: "dicta",
                                    metricName: "iusto",
                                    operator: "EQUAL",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "sint",
                                    expressions: [
                                      "omnis",
                                      "ut",
                                    ],
                                    maxComparisonValue: "sed",
                                    minComparisonValue: "exercitationem",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ipsa",
                                    maxComparisonValue: "delectus",
                                    metricName: "eos",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "est",
                                    expressions: [
                                      "saepe",
                                    ],
                                    maxComparisonValue: "voluptatem",
                                    minComparisonValue: "corporis",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "inventore",
                                    maxComparisonValue: "repellat",
                                    metricName: "ullam",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nihil",
                                    expressions: [
                                      "esse",
                                    ],
                                    maxComparisonValue: "eum",
                                    minComparisonValue: "pariatur",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "autem",
                                    maxComparisonValue: "perferendis",
                                    metricName: "aperiam",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aspernatur",
                                    expressions: [
                                      "maxime",
                                    ],
                                    maxComparisonValue: "voluptas",
                                    minComparisonValue: "facere",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sit",
                                    maxComparisonValue: "eveniet",
                                    metricName: "reiciendis",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "rerum",
                                    expressions: [
                                      "saepe",
                                    ],
                                    maxComparisonValue: "aut",
                                    minComparisonValue: "quod",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "quasi",
                                    metricName: "dolores",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "aliquam",
                                expressions: [
                                  "ut",
                                  "id",
                                  "dolore",
                                ],
                                maxComparisonValue: "qui",
                                minComparisonValue: "voluptates",
                                operator: "IN_LIST",
                              },
                              metricFilter: {
                                comparisonValue: "ab",
                                maxComparisonValue: "qui",
                                metricName: "alias",
                                operator: "GREATER_THAN",
                                scope: "USER",
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "voluptatem",
                                expressions: [
                                  "soluta",
                                  "est",
                                ],
                                maxComparisonValue: "quam",
                                minComparisonValue: "accusamus",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "iure",
                                maxComparisonValue: "quisquam",
                                metricName: "cumque",
                                operator: "LESS_THAN",
                                scope: "USER",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "in",
                                expressions: [
                                  "et",
                                  "et",
                                ],
                                maxComparisonValue: "labore",
                                minComparisonValue: "sed",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "sunt",
                                maxComparisonValue: "et",
                                metricName: "molestias",
                                operator: "BETWEEN",
                                scope: "USER",
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "repellat",
                                    expressions: [
                                      "autem",
                                      "repellat",
                                    ],
                                    maxComparisonValue: "libero",
                                    minComparisonValue: "ad",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "veritatis",
                                    maxComparisonValue: "et",
                                    metricName: "ab",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "repudiandae",
                                    expressions: [
                                      "ut",
                                    ],
                                    maxComparisonValue: "explicabo",
                                    minComparisonValue: "recusandae",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "facilis",
                                    maxComparisonValue: "sit",
                                    metricName: "hic",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quis",
                                    expressions: [
                                      "voluptatibus",
                                      "ipsa",
                                    ],
                                    maxComparisonValue: "corporis",
                                    minComparisonValue: "et",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "laboriosam",
                                    maxComparisonValue: "deserunt",
                                    metricName: "dignissimos",
                                    operator: "GREATER_THAN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptas",
                                    expressions: [
                                      "impedit",
                                    ],
                                    maxComparisonValue: "consequatur",
                                    minComparisonValue: "et",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "fugit",
                                    metricName: "aut",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ratione",
                                expressions: [
                                  "exercitationem",
                                ],
                                maxComparisonValue: "facilis",
                                minComparisonValue: "ratione",
                                operator: "OPERATOR_UNSPECIFIED",
                              },
                              metricFilter: {
                                comparisonValue: "repellendus",
                                maxComparisonValue: "atque",
                                metricName: "repellat",
                                operator: "LESS_THAN",
                                scope: "PRODUCT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "sed",
                                expressions: [
                                  "ut",
                                  "accusantium",
                                  "voluptas",
                                ],
                                maxComparisonValue: "placeat",
                                minComparisonValue: "temporibus",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "odio",
                                maxComparisonValue: "et",
                                metricName: "omnis",
                                operator: "LESS_THAN",
                                scope: "USER",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            segmentId: "nihil",
          },
        ],
        viewId: "officia",
      },
      {
        cohortGroup: {
          cohorts: [
            {
              dateRange: {
                endDate: "similique",
                startDate: "aliquam",
              },
              name: "aut",
              type: "FIRST_VISIT_DATE",
            },
            {
              dateRange: {
                endDate: "sint",
                startDate: "earum",
              },
              name: "quia",
              type: "UNSPECIFIED_COHORT_TYPE",
            },
            {
              dateRange: {
                endDate: "architecto",
                startDate: "praesentium",
              },
              name: "et",
              type: "UNSPECIFIED_COHORT_TYPE",
            },
          ],
          lifetimeValue: false,
        },
        dateRanges: [
          {
            endDate: "rerum",
            startDate: "magnam",
          },
        ],
        dimensionFilterClauses: [
          {
            filters: [
              {
                caseSensitive: false,
                dimensionName: "ullam",
                expressions: [
                  "nam",
                  "in",
                ],
                not: true,
                operator: "IN_LIST",
              },
            ],
            operator: "OPERATOR_UNSPECIFIED",
          },
        ],
        dimensions: [
          {
            histogramBuckets: [
              "voluptates",
              "molestias",
            ],
            name: "vel",
          },
        ],
        filtersExpression: "numquam",
        hideTotals: false,
        hideValueRanges: false,
        includeEmptyRows: true,
        metricFilterClauses: [
          {
            filters: [
              {
                comparisonValue: "necessitatibus",
                metricName: "quia",
                not: true,
                operator: "GREATER_THAN",
              },
              {
                comparisonValue: "at",
                metricName: "ut",
                not: true,
                operator: "EQUAL",
              },
              {
                comparisonValue: "dignissimos",
                metricName: "accusantium",
                not: false,
                operator: "IS_MISSING",
              },
            ],
            operator: "AND",
          },
        ],
        metrics: [
          {
            alias: "dolor",
            expression: "dolorem",
            formattingType: "METRIC_TYPE_UNSPECIFIED",
          },
        ],
        orderBys: [
          {
            fieldName: "nulla",
            orderType: "DIMENSION_AS_INTEGER",
            sortOrder: "DESCENDING",
          },
          {
            fieldName: "eligendi",
            orderType: "VALUE",
            sortOrder: "SORT_ORDER_UNSPECIFIED",
          },
          {
            fieldName: "sed",
            orderType: "SMART",
            sortOrder: "DESCENDING",
          },
        ],
        pageSize: 1298770911997810884,
        pageToken: "commodi",
        pivots: [
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "aut",
                    expressions: [
                      "eligendi",
                      "et",
                    ],
                    not: true,
                    operator: "PARTIAL",
                  },
                  {
                    caseSensitive: true,
                    dimensionName: "eligendi",
                    expressions: [
                      "beatae",
                      "nostrum",
                    ],
                    not: true,
                    operator: "IN_LIST",
                  },
                  {
                    caseSensitive: true,
                    dimensionName: "sequi",
                    expressions: [
                      "dolorem",
                      "repudiandae",
                      "est",
                    ],
                    not: true,
                    operator: "EXACT",
                  },
                ],
                operator: "OPERATOR_UNSPECIFIED",
              },
              {
                filters: [
                  {
                    caseSensitive: true,
                    dimensionName: "qui",
                    expressions: [
                      "quos",
                      "nihil",
                      "voluptas",
                    ],
                    not: false,
                    operator: "PARTIAL",
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "modi",
                    expressions: [
                      "inventore",
                    ],
                    not: false,
                    operator: "OPERATOR_UNSPECIFIED",
                  },
                ],
                operator: "OR",
              },
              {
                filters: [
                  {
                    caseSensitive: true,
                    dimensionName: "deserunt",
                    expressions: [
                      "aperiam",
                      "et",
                    ],
                    not: false,
                    operator: "ENDS_WITH",
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "itaque",
                    expressions: [
                      "placeat",
                    ],
                    not: false,
                    operator: "OPERATOR_UNSPECIFIED",
                  },
                ],
                operator: "OPERATOR_UNSPECIFIED",
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "ut",
                  "quisquam",
                  "sit",
                ],
                name: "ratione",
              },
              {
                histogramBuckets: [
                  "tenetur",
                  "quia",
                ],
                name: "ut",
              },
            ],
            maxGroupCount: 2455040378979801340,
            metrics: [
              {
                alias: "aut",
                expression: "itaque",
                formattingType: "INTEGER",
              },
              {
                alias: "qui",
                expression: "earum",
                formattingType: "TIME",
              },
            ],
            startGroup: 4532570297948078418,
          },
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: true,
                    dimensionName: "quas",
                    expressions: [
                      "blanditiis",
                      "eos",
                      "ut",
                    ],
                    not: false,
                    operator: "ENDS_WITH",
                  },
                  {
                    caseSensitive: true,
                    dimensionName: "dolores",
                    expressions: [
                      "itaque",
                      "eligendi",
                      "libero",
                    ],
                    not: false,
                    operator: "REGEXP",
                  },
                ],
                operator: "AND",
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "nihil",
                    expressions: [
                      "quasi",
                      "quia",
                      "molestiae",
                    ],
                    not: true,
                    operator: "PARTIAL",
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "modi",
                    expressions: [
                      "dolorem",
                      "ut",
                    ],
                    not: false,
                    operator: "IN_LIST",
                  },
                ],
                operator: "OPERATOR_UNSPECIFIED",
              },
              {
                filters: [
                  {
                    caseSensitive: true,
                    dimensionName: "culpa",
                    expressions: [
                      "sint",
                      "est",
                    ],
                    not: true,
                    operator: "BEGINS_WITH",
                  },
                  {
                    caseSensitive: true,
                    dimensionName: "tempora",
                    expressions: [
                      "eius",
                      "aut",
                    ],
                    not: false,
                    operator: "PARTIAL",
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "non",
                    expressions: [
                      "nostrum",
                      "sit",
                    ],
                    not: false,
                    operator: "EXACT",
                  },
                ],
                operator: "OPERATOR_UNSPECIFIED",
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "aut",
                ],
                name: "rerum",
              },
            ],
            maxGroupCount: 5876915796809974624,
            metrics: [
              {
                alias: "soluta",
                expression: "accusantium",
                formattingType: "FLOAT",
              },
            ],
            startGroup: 5379839699936459243,
          },
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "mollitia",
                    expressions: [
                      "a",
                      "et",
                      "omnis",
                    ],
                    not: false,
                    operator: "NUMERIC_LESS_THAN",
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "laboriosam",
                    expressions: [
                      "cumque",
                      "quibusdam",
                      "distinctio",
                    ],
                    not: true,
                    operator: "EXACT",
                  },
                ],
                operator: "AND",
              },
              {
                filters: [
                  {
                    caseSensitive: true,
                    dimensionName: "quos",
                    expressions: [
                      "quaerat",
                      "vel",
                      "tempora",
                    ],
                    not: true,
                    operator: "NUMERIC_GREATER_THAN",
                  },
                  {
                    caseSensitive: true,
                    dimensionName: "quia",
                    expressions: [
                      "repellat",
                      "accusantium",
                      "et",
                    ],
                    not: true,
                    operator: "EXACT",
                  },
                  {
                    caseSensitive: true,
                    dimensionName: "eaque",
                    expressions: [
                      "possimus",
                      "consectetur",
                      "quidem",
                    ],
                    not: false,
                    operator: "EXACT",
                  },
                ],
                operator: "OPERATOR_UNSPECIFIED",
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "aspernatur",
                    expressions: [
                      "facilis",
                      "tempore",
                    ],
                    not: false,
                    operator: "BEGINS_WITH",
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "modi",
                    expressions: [
                      "laudantium",
                    ],
                    not: false,
                    operator: "OPERATOR_UNSPECIFIED",
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "sint",
                    expressions: [
                      "laudantium",
                      "aliquam",
                      "fugit",
                    ],
                    not: false,
                    operator: "NUMERIC_GREATER_THAN",
                  },
                ],
                operator: "AND",
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "molestiae",
                ],
                name: "non",
              },
              {
                histogramBuckets: [
                  "rem",
                  "ipsum",
                  "quasi",
                ],
                name: "aut",
              },
              {
                histogramBuckets: [
                  "eos",
                  "sint",
                  "aliquid",
                ],
                name: "a",
              },
            ],
            maxGroupCount: 8626443857861818200,
            metrics: [
              {
                alias: "perferendis",
                expression: "numquam",
                formattingType: "TIME",
              },
              {
                alias: "vitae",
                expression: "et",
                formattingType: "CURRENCY",
              },
            ],
            startGroup: 1806218515051014113,
          },
        ],
        samplingLevel: "DEFAULT",
        segments: [
          {
            dynamicSegment: {
              name: "repellat",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptatem",
                                    expressions: [
                                      "quasi",
                                      "deleniti",
                                      "qui",
                                    ],
                                    maxComparisonValue: "sit",
                                    minComparisonValue: "assumenda",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ipsum",
                                    maxComparisonValue: "consequuntur",
                                    metricName: "laudantium",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quod",
                                    expressions: [
                                      "aliquam",
                                      "aut",
                                      "laborum",
                                    ],
                                    maxComparisonValue: "voluptatem",
                                    minComparisonValue: "enim",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "non",
                                    maxComparisonValue: "saepe",
                                    metricName: "dolores",
                                    operator: "GREATER_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "omnis",
                                    expressions: [
                                      "ut",
                                    ],
                                    maxComparisonValue: "qui",
                                    minComparisonValue: "deleniti",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "enim",
                                    maxComparisonValue: "qui",
                                    metricName: "explicabo",
                                    operator: "BETWEEN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "expedita",
                                    expressions: [
                                      "eligendi",
                                      "est",
                                    ],
                                    maxComparisonValue: "similique",
                                    minComparisonValue: "architecto",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatem",
                                    maxComparisonValue: "fuga",
                                    metricName: "reiciendis",
                                    operator: "EQUAL",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "corporis",
                                    expressions: [
                                      "qui",
                                    ],
                                    maxComparisonValue: "quaerat",
                                    minComparisonValue: "sed",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "non",
                                    maxComparisonValue: "quia",
                                    metricName: "et",
                                    operator: "BETWEEN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptas",
                                    expressions: [
                                      "minima",
                                      "nihil",
                                      "voluptas",
                                    ],
                                    maxComparisonValue: "impedit",
                                    minComparisonValue: "ipsum",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "similique",
                                    maxComparisonValue: "minima",
                                    metricName: "ab",
                                    operator: "GREATER_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "dolor",
                                    expressions: [
                                      "voluptatem",
                                      "nesciunt",
                                    ],
                                    maxComparisonValue: "porro",
                                    minComparisonValue: "ut",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "commodi",
                                    maxComparisonValue: "id",
                                    metricName: "officiis",
                                    operator: "EQUAL",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolores",
                                    expressions: [
                                      "delectus",
                                      "sint",
                                    ],
                                    maxComparisonValue: "non",
                                    minComparisonValue: "labore",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ad",
                                    maxComparisonValue: "magni",
                                    metricName: "eveniet",
                                    operator: "BETWEEN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "quia",
                                    expressions: [
                                      "incidunt",
                                      "modi",
                                    ],
                                    maxComparisonValue: "voluptas",
                                    minComparisonValue: "ex",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "inventore",
                                    maxComparisonValue: "quia",
                                    metricName: "amet",
                                    operator: "GREATER_THAN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sunt",
                                    expressions: [
                                      "aspernatur",
                                    ],
                                    maxComparisonValue: "quis",
                                    minComparisonValue: "veniam",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "omnis",
                                    maxComparisonValue: "sunt",
                                    metricName: "eaque",
                                    operator: "GREATER_THAN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "et",
                                    expressions: [
                                      "laborum",
                                      "ducimus",
                                      "rerum",
                                    ],
                                    maxComparisonValue: "autem",
                                    minComparisonValue: "sint",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "blanditiis",
                                    maxComparisonValue: "impedit",
                                    metricName: "sunt",
                                    operator: "BETWEEN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "eaque",
                                    expressions: [
                                      "ut",
                                      "sapiente",
                                    ],
                                    maxComparisonValue: "natus",
                                    minComparisonValue: "nobis",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "esse",
                                    maxComparisonValue: "ad",
                                    metricName: "culpa",
                                    operator: "EQUAL",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "est",
                                    expressions: [
                                      "blanditiis",
                                      "enim",
                                      "ut",
                                    ],
                                    maxComparisonValue: "odit",
                                    minComparisonValue: "non",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sunt",
                                    maxComparisonValue: "ea",
                                    metricName: "id",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "modi",
                                    expressions: [
                                      "quia",
                                      "maiores",
                                    ],
                                    maxComparisonValue: "nisi",
                                    minComparisonValue: "omnis",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "praesentium",
                                    maxComparisonValue: "totam",
                                    metricName: "ut",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "qui",
                                    expressions: [
                                      "rerum",
                                    ],
                                    maxComparisonValue: "qui",
                                    minComparisonValue: "quis",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "magni",
                                    maxComparisonValue: "iure",
                                    metricName: "culpa",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quia",
                                    expressions: [
                                      "aut",
                                      "qui",
                                    ],
                                    maxComparisonValue: "pariatur",
                                    minComparisonValue: "dicta",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "eveniet",
                                    maxComparisonValue: "corrupti",
                                    metricName: "ut",
                                    operator: "BETWEEN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "sint",
                                    expressions: [
                                      "aut",
                                      "et",
                                      "eum",
                                    ],
                                    maxComparisonValue: "repellat",
                                    minComparisonValue: "maiores",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ipsam",
                                    maxComparisonValue: "odio",
                                    metricName: "sit",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "quia",
                                    expressions: [
                                      "placeat",
                                      "magni",
                                      "et",
                                    ],
                                    maxComparisonValue: "est",
                                    minComparisonValue: "dolorum",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "distinctio",
                                    maxComparisonValue: "quaerat",
                                    metricName: "sit",
                                    operator: "BETWEEN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "sapiente",
                                expressions: [
                                  "vero",
                                ],
                                maxComparisonValue: "voluptatibus",
                                minComparisonValue: "facere",
                                operator: "IN_LIST",
                              },
                              metricFilter: {
                                comparisonValue: "nobis",
                                maxComparisonValue: "nulla",
                                metricName: "nesciunt",
                                operator: "LESS_THAN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "quia",
                                expressions: [
                                  "suscipit",
                                ],
                                maxComparisonValue: "et",
                                minComparisonValue: "consectetur",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "aperiam",
                                maxComparisonValue: "distinctio",
                                metricName: "ex",
                                operator: "LESS_THAN",
                                scope: "HIT",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "vero",
                                    expressions: [
                                      "omnis",
                                      "ducimus",
                                    ],
                                    maxComparisonValue: "nulla",
                                    minComparisonValue: "non",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolore",
                                    maxComparisonValue: "cupiditate",
                                    metricName: "non",
                                    operator: "BETWEEN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "quae",
                                    expressions: [
                                      "recusandae",
                                      "nostrum",
                                      "maxime",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "sunt",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "repudiandae",
                                    maxComparisonValue: "similique",
                                    metricName: "consequatur",
                                    operator: "BETWEEN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "rerum",
                                    expressions: [
                                      "voluptatem",
                                    ],
                                    maxComparisonValue: "dolor",
                                    minComparisonValue: "nobis",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "exercitationem",
                                    maxComparisonValue: "provident",
                                    metricName: "necessitatibus",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "accusamus",
                                    expressions: [
                                      "fuga",
                                      "consequatur",
                                    ],
                                    maxComparisonValue: "dignissimos",
                                    minComparisonValue: "ipsa",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "velit",
                                    maxComparisonValue: "expedita",
                                    metricName: "sit",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eos",
                                    expressions: [
                                      "similique",
                                      "commodi",
                                    ],
                                    maxComparisonValue: "voluptatem",
                                    minComparisonValue: "ut",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "labore",
                                    maxComparisonValue: "quasi",
                                    metricName: "occaecati",
                                    operator: "BETWEEN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "eos",
                                expressions: [
                                  "sit",
                                  "quos",
                                  "numquam",
                                ],
                                maxComparisonValue: "neque",
                                minComparisonValue: "ullam",
                                operator: "OPERATOR_UNSPECIFIED",
                              },
                              metricFilter: {
                                comparisonValue: "quia",
                                maxComparisonValue: "vero",
                                metricName: "ex",
                                operator: "EQUAL",
                                scope: "PRODUCT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "doloremque",
                                expressions: [
                                  "quis",
                                ],
                                maxComparisonValue: "repellat",
                                minComparisonValue: "omnis",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "aperiam",
                                maxComparisonValue: "omnis",
                                metricName: "impedit",
                                operator: "EQUAL",
                                scope: "USER",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "sed",
                                expressions: [
                                  "a",
                                ],
                                maxComparisonValue: "magni",
                                minComparisonValue: "tenetur",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "incidunt",
                                maxComparisonValue: "qui",
                                metricName: "hic",
                                operator: "EQUAL",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "est",
                                expressions: [
                                  "voluptatem",
                                  "vel",
                                  "aut",
                                ],
                                maxComparisonValue: "in",
                                minComparisonValue: "voluptas",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "placeat",
                                maxComparisonValue: "numquam",
                                metricName: "quos",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "HIT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "rerum",
                                expressions: [
                                  "hic",
                                ],
                                maxComparisonValue: "eaque",
                                minComparisonValue: "dolor",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "dicta",
                                maxComparisonValue: "quas",
                                metricName: "temporibus",
                                operator: "BETWEEN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "nulla",
                                expressions: [
                                  "omnis",
                                ],
                                maxComparisonValue: "qui",
                                minComparisonValue: "nulla",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "consequatur",
                                maxComparisonValue: "aliquam",
                                metricName: "dolorum",
                                operator: "BETWEEN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "est",
                                expressions: [
                                  "quos",
                                  "blanditiis",
                                ],
                                maxComparisonValue: "fugit",
                                minComparisonValue: "vel",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "est",
                                maxComparisonValue: "eius",
                                metricName: "nostrum",
                                operator: "GREATER_THAN",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "nihil",
                                expressions: [
                                  "magni",
                                  "et",
                                  "consectetur",
                                ],
                                maxComparisonValue: "accusamus",
                                minComparisonValue: "asperiores",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "veritatis",
                                maxComparisonValue: "et",
                                metricName: "ullam",
                                operator: "GREATER_THAN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "qui",
                                expressions: [
                                  "nulla",
                                  "modi",
                                  "dignissimos",
                                ],
                                maxComparisonValue: "beatae",
                                minComparisonValue: "esse",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "eum",
                                maxComparisonValue: "aspernatur",
                                metricName: "molestiae",
                                operator: "EQUAL",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "hic",
                                    expressions: [
                                      "dolores",
                                      "quae",
                                      "aut",
                                    ],
                                    maxComparisonValue: "hic",
                                    minComparisonValue: "reprehenderit",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "nesciunt",
                                    maxComparisonValue: "quia",
                                    metricName: "dolores",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ducimus",
                                    expressions: [
                                      "ducimus",
                                      "ea",
                                      "ipsa",
                                    ],
                                    maxComparisonValue: "sed",
                                    minComparisonValue: "voluptatem",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "beatae",
                                    maxComparisonValue: "cumque",
                                    metricName: "pariatur",
                                    operator: "LESS_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptatum",
                                    expressions: [
                                      "pariatur",
                                      "natus",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "earum",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ab",
                                    maxComparisonValue: "ad",
                                    metricName: "earum",
                                    operator: "EQUAL",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "quia",
                                    expressions: [
                                      "nulla",
                                    ],
                                    maxComparisonValue: "aut",
                                    minComparisonValue: "voluptatibus",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "deleniti",
                                    maxComparisonValue: "libero",
                                    metricName: "dolorum",
                                    operator: "EQUAL",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "velit",
                                    expressions: [
                                      "iste",
                                      "fugiat",
                                      "minus",
                                    ],
                                    maxComparisonValue: "laborum",
                                    minComparisonValue: "eos",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "velit",
                                    maxComparisonValue: "debitis",
                                    metricName: "aut",
                                    operator: "LESS_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "neque",
                                    expressions: [
                                      "libero",
                                      "error",
                                    ],
                                    maxComparisonValue: "eos",
                                    minComparisonValue: "ex",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sunt",
                                    maxComparisonValue: "dolorem",
                                    metricName: "voluptas",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "soluta",
                                    expressions: [
                                      "qui",
                                      "doloremque",
                                    ],
                                    maxComparisonValue: "nisi",
                                    minComparisonValue: "id",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "debitis",
                                    maxComparisonValue: "voluptatem",
                                    metricName: "magnam",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aut",
                                    expressions: [
                                      "libero",
                                      "dolorem",
                                    ],
                                    maxComparisonValue: "illo",
                                    minComparisonValue: "sunt",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "autem",
                                    maxComparisonValue: "commodi",
                                    metricName: "deleniti",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sed",
                                    expressions: [
                                      "distinctio",
                                      "occaecati",
                                      "rem",
                                    ],
                                    maxComparisonValue: "est",
                                    minComparisonValue: "quo",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "veritatis",
                                    maxComparisonValue: "et",
                                    metricName: "sunt",
                                    operator: "EQUAL",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "recusandae",
                                    expressions: [
                                      "voluptatem",
                                    ],
                                    maxComparisonValue: "sapiente",
                                    minComparisonValue: "dolores",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sit",
                                    maxComparisonValue: "repellat",
                                    metricName: "earum",
                                    operator: "GREATER_THAN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "in",
                                    expressions: [
                                      "ut",
                                      "debitis",
                                    ],
                                    maxComparisonValue: "id",
                                    minComparisonValue: "vel",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "fuga",
                                    maxComparisonValue: "velit",
                                    metricName: "ullam",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ut",
                                    expressions: [
                                      "repellendus",
                                      "a",
                                    ],
                                    maxComparisonValue: "non",
                                    minComparisonValue: "nesciunt",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "perspiciatis",
                                    maxComparisonValue: "nihil",
                                    metricName: "enim",
                                    operator: "BETWEEN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "minus",
                                    expressions: [
                                      "sequi",
                                      "ut",
                                      "corporis",
                                    ],
                                    maxComparisonValue: "ea",
                                    minComparisonValue: "adipisci",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sunt",
                                    maxComparisonValue: "numquam",
                                    metricName: "et",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "impedit",
                                expressions: [
                                  "sint",
                                  "quis",
                                ],
                                maxComparisonValue: "dolores",
                                minComparisonValue: "sed",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "quidem",
                                maxComparisonValue: "reiciendis",
                                metricName: "velit",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "dolor",
                                expressions: [
                                  "officiis",
                                  "quo",
                                ],
                                maxComparisonValue: "aut",
                                minComparisonValue: "et",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "aut",
                                maxComparisonValue: "natus",
                                metricName: "iste",
                                operator: "LESS_THAN",
                                scope: "USER",
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              userSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aspernatur",
                                    expressions: [
                                      "assumenda",
                                    ],
                                    maxComparisonValue: "minus",
                                    minComparisonValue: "voluptatibus",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "qui",
                                    maxComparisonValue: "doloribus",
                                    metricName: "est",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "nulla",
                                    expressions: [
                                      "quas",
                                      "culpa",
                                    ],
                                    maxComparisonValue: "maiores",
                                    minComparisonValue: "consequatur",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "commodi",
                                    maxComparisonValue: "tempore",
                                    metricName: "nesciunt",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "et",
                                    expressions: [
                                      "vero",
                                      "fuga",
                                    ],
                                    maxComparisonValue: "dolores",
                                    minComparisonValue: "doloremque",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolores",
                                    maxComparisonValue: "autem",
                                    metricName: "enim",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "officia",
                                    expressions: [
                                      "neque",
                                    ],
                                    maxComparisonValue: "quia",
                                    minComparisonValue: "alias",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "suscipit",
                                    maxComparisonValue: "minus",
                                    metricName: "aut",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "ad",
                                expressions: [
                                  "labore",
                                ],
                                maxComparisonValue: "omnis",
                                minComparisonValue: "sequi",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "ipsa",
                                maxComparisonValue: "repellendus",
                                metricName: "rerum",
                                operator: "EQUAL",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "neque",
                                expressions: [
                                  "mollitia",
                                  "distinctio",
                                ],
                                maxComparisonValue: "culpa",
                                minComparisonValue: "sunt",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "quo",
                                maxComparisonValue: "sed",
                                metricName: "est",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "amet",
                                expressions: [
                                  "culpa",
                                  "possimus",
                                ],
                                maxComparisonValue: "ex",
                                minComparisonValue: "quod",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "delectus",
                                maxComparisonValue: "architecto",
                                metricName: "aut",
                                operator: "BETWEEN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "cupiditate",
                                expressions: [
                                  "sapiente",
                                  "qui",
                                  "laudantium",
                                ],
                                maxComparisonValue: "repellendus",
                                minComparisonValue: "architecto",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "excepturi",
                                maxComparisonValue: "animi",
                                metricName: "error",
                                operator: "GREATER_THAN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "magni",
                                expressions: [
                                  "consequatur",
                                  "nulla",
                                  "officia",
                                ],
                                maxComparisonValue: "sunt",
                                minComparisonValue: "accusamus",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "deleniti",
                                maxComparisonValue: "maiores",
                                metricName: "quasi",
                                operator: "GREATER_THAN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "sed",
                                expressions: [
                                  "veniam",
                                  "qui",
                                ],
                                maxComparisonValue: "facere",
                                minComparisonValue: "doloremque",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "distinctio",
                                maxComparisonValue: "eos",
                                metricName: "officia",
                                operator: "GREATER_THAN",
                                scope: "USER",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "nihil",
                                expressions: [
                                  "at",
                                  "ut",
                                  "ducimus",
                                ],
                                maxComparisonValue: "sit",
                                minComparisonValue: "ut",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "ea",
                                maxComparisonValue: "officiis",
                                metricName: "exercitationem",
                                operator: "BETWEEN",
                                scope: "HIT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "ea",
                                expressions: [
                                  "cumque",
                                  "id",
                                  "sint",
                                ],
                                maxComparisonValue: "libero",
                                minComparisonValue: "eum",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "earum",
                                maxComparisonValue: "aut",
                                metricName: "nihil",
                                operator: "GREATER_THAN",
                                scope: "PRODUCT",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "et",
                                    expressions: [
                                      "sunt",
                                    ],
                                    maxComparisonValue: "laborum",
                                    minComparisonValue: "quis",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "recusandae",
                                    maxComparisonValue: "placeat",
                                    metricName: "dolorem",
                                    operator: "BETWEEN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quod",
                                    expressions: [
                                      "dicta",
                                    ],
                                    maxComparisonValue: "eligendi",
                                    minComparisonValue: "eum",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "labore",
                                    maxComparisonValue: "a",
                                    metricName: "laudantium",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aut",
                                    expressions: [
                                      "voluptatum",
                                    ],
                                    maxComparisonValue: "repudiandae",
                                    minComparisonValue: "accusamus",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "officia",
                                    maxComparisonValue: "ipsum",
                                    metricName: "enim",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "quod",
                                    expressions: [
                                      "fugit",
                                      "qui",
                                      "beatae",
                                    ],
                                    maxComparisonValue: "impedit",
                                    minComparisonValue: "natus",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "non",
                                    maxComparisonValue: "tempore",
                                    metricName: "iusto",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ad",
                                    expressions: [
                                      "ratione",
                                      "ad",
                                    ],
                                    maxComparisonValue: "eaque",
                                    minComparisonValue: "eos",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quia",
                                    maxComparisonValue: "nostrum",
                                    metricName: "vel",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sit",
                                    expressions: [
                                      "est",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "aliquam",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "pariatur",
                                    maxComparisonValue: "tempora",
                                    metricName: "aperiam",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sunt",
                                    expressions: [
                                      "similique",
                                      "aspernatur",
                                    ],
                                    maxComparisonValue: "placeat",
                                    minComparisonValue: "nemo",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "voluptas",
                                    metricName: "sint",
                                    operator: "BETWEEN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "voluptas",
                                    expressions: [
                                      "ut",
                                      "sapiente",
                                      "numquam",
                                    ],
                                    maxComparisonValue: "est",
                                    minComparisonValue: "voluptatem",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quaerat",
                                    maxComparisonValue: "quia",
                                    metricName: "atque",
                                    operator: "GREATER_THAN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "quia",
                                    expressions: [
                                      "non",
                                      "porro",
                                    ],
                                    maxComparisonValue: "ut",
                                    minComparisonValue: "eum",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "assumenda",
                                    maxComparisonValue: "rerum",
                                    metricName: "consequatur",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolorum",
                                    expressions: [
                                      "perspiciatis",
                                      "repudiandae",
                                      "non",
                                    ],
                                    maxComparisonValue: "veniam",
                                    minComparisonValue: "earum",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "non",
                                    maxComparisonValue: "quisquam",
                                    metricName: "aspernatur",
                                    operator: "GREATER_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ipsum",
                                    expressions: [
                                      "qui",
                                      "quo",
                                    ],
                                    maxComparisonValue: "ut",
                                    minComparisonValue: "dolorem",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "vitae",
                                    maxComparisonValue: "cupiditate",
                                    metricName: "non",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ut",
                                    expressions: [
                                      "et",
                                      "sint",
                                    ],
                                    maxComparisonValue: "reiciendis",
                                    minComparisonValue: "possimus",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "rerum",
                                    maxComparisonValue: "dolore",
                                    metricName: "placeat",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "sint",
                                expressions: [
                                  "nihil",
                                  "assumenda",
                                  "esse",
                                ],
                                maxComparisonValue: "sint",
                                minComparisonValue: "dolorem",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "quo",
                                maxComparisonValue: "esse",
                                metricName: "nulla",
                                operator: "EQUAL",
                                scope: "USER",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "aut",
                                    expressions: [
                                      "molestiae",
                                      "ut",
                                    ],
                                    maxComparisonValue: "aut",
                                    minComparisonValue: "eaque",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "qui",
                                    maxComparisonValue: "sapiente",
                                    metricName: "est",
                                    operator: "GREATER_THAN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptate",
                                    expressions: [
                                      "dolorem",
                                      "quo",
                                    ],
                                    maxComparisonValue: "mollitia",
                                    minComparisonValue: "quasi",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "accusantium",
                                    maxComparisonValue: "aut",
                                    metricName: "at",
                                    operator: "EQUAL",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "exercitationem",
                                    expressions: [
                                      "animi",
                                    ],
                                    maxComparisonValue: "autem",
                                    minComparisonValue: "voluptatibus",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "numquam",
                                    maxComparisonValue: "voluptas",
                                    metricName: "placeat",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sed",
                                    expressions: [
                                      "ut",
                                    ],
                                    maxComparisonValue: "consequatur",
                                    minComparisonValue: "nulla",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quia",
                                    maxComparisonValue: "veniam",
                                    metricName: "cumque",
                                    operator: "EQUAL",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "dolore",
                                    expressions: [
                                      "ipsum",
                                      "rem",
                                    ],
                                    maxComparisonValue: "alias",
                                    minComparisonValue: "error",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "laborum",
                                    maxComparisonValue: "ipsum",
                                    metricName: "quod",
                                    operator: "LESS_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "reiciendis",
                                    expressions: [
                                      "illo",
                                      "eveniet",
                                      "velit",
                                    ],
                                    maxComparisonValue: "magni",
                                    minComparisonValue: "quia",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "minima",
                                    maxComparisonValue: "qui",
                                    metricName: "dolores",
                                    operator: "LESS_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "magnam",
                                    expressions: [
                                      "aut",
                                      "et",
                                      "aut",
                                    ],
                                    maxComparisonValue: "necessitatibus",
                                    minComparisonValue: "sunt",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "nobis",
                                    maxComparisonValue: "id",
                                    metricName: "reprehenderit",
                                    operator: "BETWEEN",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "maxime",
                                    expressions: [
                                      "et",
                                    ],
                                    maxComparisonValue: "eveniet",
                                    minComparisonValue: "soluta",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "esse",
                                    maxComparisonValue: "vitae",
                                    metricName: "ut",
                                    operator: "EQUAL",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "iure",
                                    expressions: [
                                      "magni",
                                      "architecto",
                                    ],
                                    maxComparisonValue: "alias",
                                    minComparisonValue: "minus",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "eligendi",
                                    maxComparisonValue: "quisquam",
                                    metricName: "enim",
                                    operator: "BETWEEN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "velit",
                                    expressions: [
                                      "voluptates",
                                    ],
                                    maxComparisonValue: "sunt",
                                    minComparisonValue: "neque",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "quae",
                                    metricName: "fugit",
                                    operator: "GREATER_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "laboriosam",
                                    expressions: [
                                      "sed",
                                    ],
                                    maxComparisonValue: "reprehenderit",
                                    minComparisonValue: "iusto",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "occaecati",
                                    maxComparisonValue: "repellendus",
                                    metricName: "rerum",
                                    operator: "EQUAL",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "voluptas",
                                    expressions: [
                                      "atque",
                                    ],
                                    maxComparisonValue: "dolores",
                                    minComparisonValue: "optio",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "asperiores",
                                    metricName: "totam",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "maxime",
                                    expressions: [
                                      "et",
                                      "sed",
                                      "aut",
                                    ],
                                    maxComparisonValue: "ea",
                                    minComparisonValue: "non",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "et",
                                    metricName: "quod",
                                    operator: "EQUAL",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ab",
                                    expressions: [
                                      "animi",
                                    ],
                                    maxComparisonValue: "asperiores",
                                    minComparisonValue: "qui",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "harum",
                                    maxComparisonValue: "aut",
                                    metricName: "eos",
                                    operator: "LESS_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "voluptatem",
                                expressions: [
                                  "ut",
                                ],
                                maxComparisonValue: "est",
                                minComparisonValue: "aut",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "delectus",
                                maxComparisonValue: "cum",
                                metricName: "praesentium",
                                operator: "GREATER_THAN",
                                scope: "USER",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "eos",
                                expressions: [
                                  "perferendis",
                                  "quam",
                                  "dolorem",
                                ],
                                maxComparisonValue: "et",
                                minComparisonValue: "ea",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "recusandae",
                                maxComparisonValue: "soluta",
                                metricName: "eum",
                                operator: "LESS_THAN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "enim",
                                expressions: [
                                  "aut",
                                  "molestias",
                                ],
                                maxComparisonValue: "voluptas",
                                minComparisonValue: "consectetur",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "iste",
                                maxComparisonValue: "quibusdam",
                                metricName: "architecto",
                                operator: "GREATER_THAN",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "omnis",
                                expressions: [
                                  "voluptatem",
                                  "dicta",
                                ],
                                maxComparisonValue: "accusamus",
                                minComparisonValue: "nostrum",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "reiciendis",
                                maxComparisonValue: "dolorem",
                                metricName: "et",
                                operator: "GREATER_THAN",
                                scope: "USER",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            segmentId: "facere",
          },
          {
            dynamicSegment: {
              name: "consequatur",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "velit",
                                    expressions: [
                                      "nemo",
                                      "impedit",
                                      "ut",
                                    ],
                                    maxComparisonValue: "consequatur",
                                    minComparisonValue: "animi",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "repellendus",
                                    maxComparisonValue: "similique",
                                    metricName: "quod",
                                    operator: "GREATER_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "velit",
                                    expressions: [
                                      "deserunt",
                                    ],
                                    maxComparisonValue: "velit",
                                    minComparisonValue: "sequi",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quam",
                                    maxComparisonValue: "assumenda",
                                    metricName: "optio",
                                    operator: "BETWEEN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ut",
                                    expressions: [
                                      "dolores",
                                      "dolore",
                                      "sequi",
                                    ],
                                    maxComparisonValue: "dicta",
                                    minComparisonValue: "voluptatem",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "optio",
                                    maxComparisonValue: "sapiente",
                                    metricName: "vitae",
                                    operator: "BETWEEN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "maiores",
                                expressions: [
                                  "rerum",
                                  "tenetur",
                                ],
                                maxComparisonValue: "enim",
                                minComparisonValue: "praesentium",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "aut",
                                maxComparisonValue: "laboriosam",
                                metricName: "nisi",
                                operator: "GREATER_THAN",
                                scope: "USER",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "atque",
                                    expressions: [
                                      "quidem",
                                      "doloremque",
                                    ],
                                    maxComparisonValue: "quia",
                                    minComparisonValue: "officia",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sapiente",
                                    maxComparisonValue: "ipsum",
                                    metricName: "consequatur",
                                    operator: "BETWEEN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sunt",
                                    expressions: [
                                      "tempora",
                                      "alias",
                                      "aut",
                                    ],
                                    maxComparisonValue: "labore",
                                    minComparisonValue: "reiciendis",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolorem",
                                    maxComparisonValue: "rem",
                                    metricName: "aliquid",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quidem",
                                    expressions: [
                                      "hic",
                                    ],
                                    maxComparisonValue: "est",
                                    minComparisonValue: "quis",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "facere",
                                    metricName: "enim",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "sed",
                                    expressions: [
                                      "eius",
                                    ],
                                    maxComparisonValue: "atque",
                                    minComparisonValue: "ipsa",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "asperiores",
                                    maxComparisonValue: "omnis",
                                    metricName: "consequatur",
                                    operator: "EQUAL",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "necessitatibus",
                                    expressions: [
                                      "ut",
                                      "molestiae",
                                      "et",
                                    ],
                                    maxComparisonValue: "voluptatum",
                                    minComparisonValue: "inventore",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "animi",
                                    maxComparisonValue: "dolores",
                                    metricName: "ratione",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "non",
                                    expressions: [
                                      "eum",
                                      "sed",
                                      "placeat",
                                    ],
                                    maxComparisonValue: "quis",
                                    minComparisonValue: "rerum",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "assumenda",
                                    metricName: "voluptates",
                                    operator: "LESS_THAN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quisquam",
                                    expressions: [
                                      "amet",
                                      "reiciendis",
                                      "repudiandae",
                                    ],
                                    maxComparisonValue: "rerum",
                                    minComparisonValue: "illo",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "in",
                                    maxComparisonValue: "at",
                                    metricName: "rerum",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "est",
                                    expressions: [
                                      "sapiente",
                                    ],
                                    maxComparisonValue: "quam",
                                    minComparisonValue: "rerum",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "aspernatur",
                                    metricName: "accusantium",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "dolorem",
                                    expressions: [
                                      "omnis",
                                      "eos",
                                      "necessitatibus",
                                    ],
                                    maxComparisonValue: "eius",
                                    minComparisonValue: "voluptas",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "rerum",
                                    metricName: "libero",
                                    operator: "GREATER_THAN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "veniam",
                                    expressions: [
                                      "in",
                                      "omnis",
                                      "iusto",
                                    ],
                                    maxComparisonValue: "ullam",
                                    minComparisonValue: "ducimus",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "est",
                                    maxComparisonValue: "amet",
                                    metricName: "molestiae",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "expedita",
                                    expressions: [
                                      "exercitationem",
                                      "saepe",
                                    ],
                                    maxComparisonValue: "blanditiis",
                                    minComparisonValue: "fugit",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "doloremque",
                                    maxComparisonValue: "alias",
                                    metricName: "est",
                                    operator: "GREATER_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ut",
                                    expressions: [
                                      "omnis",
                                      "labore",
                                    ],
                                    maxComparisonValue: "incidunt",
                                    minComparisonValue: "optio",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "fuga",
                                    maxComparisonValue: "velit",
                                    metricName: "ea",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "dolor",
                                    expressions: [
                                      "est",
                                      "quod",
                                      "rerum",
                                    ],
                                    maxComparisonValue: "dolorem",
                                    minComparisonValue: "sapiente",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "occaecati",
                                    maxComparisonValue: "aspernatur",
                                    metricName: "vel",
                                    operator: "EQUAL",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "aut",
                                expressions: [
                                  "nulla",
                                  "soluta",
                                  "nam",
                                ],
                                maxComparisonValue: "corrupti",
                                minComparisonValue: "minima",
                                operator: "IN_LIST",
                              },
                              metricFilter: {
                                comparisonValue: "aperiam",
                                maxComparisonValue: "excepturi",
                                metricName: "debitis",
                                operator: "EQUAL",
                                scope: "USER",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "laudantium",
                                expressions: [
                                  "recusandae",
                                  "tempore",
                                  "itaque",
                                ],
                                maxComparisonValue: "fugit",
                                minComparisonValue: "consequatur",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "aut",
                                maxComparisonValue: "temporibus",
                                metricName: "ea",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "PRODUCT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "ea",
                                expressions: [
                                  "sint",
                                  "voluptatem",
                                ],
                                maxComparisonValue: "rerum",
                                minComparisonValue: "in",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "ex",
                                maxComparisonValue: "aut",
                                metricName: "et",
                                operator: "GREATER_THAN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "optio",
                                expressions: [
                                  "qui",
                                ],
                                maxComparisonValue: "est",
                                minComparisonValue: "velit",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "vitae",
                                maxComparisonValue: "nihil",
                                metricName: "unde",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "HIT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "nemo",
                                expressions: [
                                  "et",
                                  "qui",
                                ],
                                maxComparisonValue: "eaque",
                                minComparisonValue: "minus",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "similique",
                                maxComparisonValue: "consequatur",
                                metricName: "sapiente",
                                operator: "LESS_THAN",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "reprehenderit",
                                expressions: [
                                  "unde",
                                ],
                                maxComparisonValue: "in",
                                minComparisonValue: "et",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "harum",
                                maxComparisonValue: "qui",
                                metricName: "accusantium",
                                operator: "BETWEEN",
                                scope: "USER",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "rerum",
                                    expressions: [
                                      "sit",
                                      "deserunt",
                                    ],
                                    maxComparisonValue: "velit",
                                    minComparisonValue: "ullam",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "amet",
                                    maxComparisonValue: "est",
                                    metricName: "cum",
                                    operator: "GREATER_THAN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "repellendus",
                                    expressions: [
                                      "est",
                                      "quidem",
                                      "nihil",
                                    ],
                                    maxComparisonValue: "corporis",
                                    minComparisonValue: "odio",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "eos",
                                    maxComparisonValue: "aut",
                                    metricName: "voluptas",
                                    operator: "BETWEEN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ad",
                                    expressions: [
                                      "dicta",
                                      "ratione",
                                      "ipsam",
                                    ],
                                    maxComparisonValue: "magni",
                                    minComparisonValue: "quibusdam",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "est",
                                    metricName: "sit",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "quo",
                                    expressions: [
                                      "quo",
                                      "dolor",
                                      "dolorem",
                                    ],
                                    maxComparisonValue: "enim",
                                    minComparisonValue: "nemo",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "in",
                                    maxComparisonValue: "maxime",
                                    metricName: "rerum",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quibusdam",
                                    expressions: [
                                      "quidem",
                                    ],
                                    maxComparisonValue: "eum",
                                    minComparisonValue: "natus",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "vero",
                                    metricName: "voluptatibus",
                                    operator: "EQUAL",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "fugit",
                                    expressions: [
                                      "inventore",
                                    ],
                                    maxComparisonValue: "a",
                                    minComparisonValue: "laboriosam",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptates",
                                    maxComparisonValue: "laborum",
                                    metricName: "eligendi",
                                    operator: "EQUAL",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sapiente",
                                    expressions: [
                                      "aliquam",
                                      "ad",
                                    ],
                                    maxComparisonValue: "dolores",
                                    minComparisonValue: "vel",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "eos",
                                    maxComparisonValue: "nihil",
                                    metricName: "corrupti",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "perferendis",
                                    expressions: [
                                      "tenetur",
                                      "laudantium",
                                      "tenetur",
                                    ],
                                    maxComparisonValue: "iste",
                                    minComparisonValue: "corrupti",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "non",
                                    maxComparisonValue: "cumque",
                                    metricName: "incidunt",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "debitis",
                                expressions: [
                                  "voluptatum",
                                  "numquam",
                                  "accusamus",
                                ],
                                maxComparisonValue: "est",
                                minComparisonValue: "sed",
                                operator: "IN_LIST",
                              },
                              metricFilter: {
                                comparisonValue: "exercitationem",
                                maxComparisonValue: "corrupti",
                                metricName: "architecto",
                                operator: "GREATER_THAN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "vero",
                                expressions: [
                                  "commodi",
                                ],
                                maxComparisonValue: "hic",
                                minComparisonValue: "nemo",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "enim",
                                maxComparisonValue: "voluptates",
                                metricName: "tempore",
                                operator: "GREATER_THAN",
                                scope: "HIT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "voluptatem",
                                expressions: [
                                  "non",
                                  "mollitia",
                                ],
                                maxComparisonValue: "qui",
                                minComparisonValue: "est",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "officiis",
                                maxComparisonValue: "molestiae",
                                metricName: "soluta",
                                operator: "EQUAL",
                                scope: "USER",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              userSegment: {
                segmentFilters: [
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "consequatur",
                                    expressions: [
                                      "incidunt",
                                      "qui",
                                    ],
                                    maxComparisonValue: "quo",
                                    minComparisonValue: "est",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "minus",
                                    maxComparisonValue: "voluptas",
                                    metricName: "molestiae",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "qui",
                                    expressions: [
                                      "laudantium",
                                      "est",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "nihil",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "omnis",
                                    maxComparisonValue: "excepturi",
                                    metricName: "voluptas",
                                    operator: "EQUAL",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "soluta",
                                    expressions: [
                                      "tenetur",
                                      "sit",
                                    ],
                                    maxComparisonValue: "ut",
                                    minComparisonValue: "earum",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sed",
                                    maxComparisonValue: "a",
                                    metricName: "voluptatem",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "repellendus",
                                    expressions: [
                                      "cum",
                                      "saepe",
                                      "earum",
                                    ],
                                    maxComparisonValue: "consectetur",
                                    minComparisonValue: "vero",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "officiis",
                                    maxComparisonValue: "facilis",
                                    metricName: "id",
                                    operator: "BETWEEN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aspernatur",
                                    expressions: [
                                      "ut",
                                      "expedita",
                                    ],
                                    maxComparisonValue: "sequi",
                                    minComparisonValue: "enim",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "cupiditate",
                                    maxComparisonValue: "deleniti",
                                    metricName: "consequatur",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "atque",
                                    expressions: [
                                      "in",
                                      "autem",
                                    ],
                                    maxComparisonValue: "ipsam",
                                    minComparisonValue: "rerum",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "velit",
                                    maxComparisonValue: "et",
                                    metricName: "ullam",
                                    operator: "GREATER_THAN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "asperiores",
                                    expressions: [
                                      "necessitatibus",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "perspiciatis",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "non",
                                    maxComparisonValue: "voluptas",
                                    metricName: "velit",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "excepturi",
                                    expressions: [
                                      "soluta",
                                      "similique",
                                      "omnis",
                                    ],
                                    maxComparisonValue: "animi",
                                    minComparisonValue: "quisquam",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "incidunt",
                                    maxComparisonValue: "consequatur",
                                    metricName: "inventore",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "necessitatibus",
                                    expressions: [
                                      "cum",
                                      "fugiat",
                                    ],
                                    maxComparisonValue: "ut",
                                    minComparisonValue: "incidunt",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sint",
                                    maxComparisonValue: "deleniti",
                                    metricName: "vero",
                                    operator: "LESS_THAN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "similique",
                                    expressions: [
                                      "aspernatur",
                                    ],
                                    maxComparisonValue: "rerum",
                                    minComparisonValue: "voluptas",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "molestias",
                                    maxComparisonValue: "omnis",
                                    metricName: "et",
                                    operator: "LESS_THAN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "occaecati",
                                    expressions: [
                                      "et",
                                      "voluptatem",
                                    ],
                                    maxComparisonValue: "nostrum",
                                    minComparisonValue: "quaerat",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "recusandae",
                                    maxComparisonValue: "incidunt",
                                    metricName: "eum",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "perspiciatis",
                                    expressions: [
                                      "impedit",
                                    ],
                                    maxComparisonValue: "rem",
                                    minComparisonValue: "quam",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ut",
                                    maxComparisonValue: "et",
                                    metricName: "praesentium",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nam",
                                    expressions: [
                                      "officia",
                                      "in",
                                    ],
                                    maxComparisonValue: "commodi",
                                    minComparisonValue: "quod",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "vel",
                                    maxComparisonValue: "reprehenderit",
                                    metricName: "nihil",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "magni",
                                    expressions: [
                                      "quibusdam",
                                      "dolore",
                                    ],
                                    maxComparisonValue: "eveniet",
                                    minComparisonValue: "pariatur",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sapiente",
                                    maxComparisonValue: "et",
                                    metricName: "ut",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "cupiditate",
                                    expressions: [
                                      "sint",
                                    ],
                                    maxComparisonValue: "minus",
                                    minComparisonValue: "fugiat",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "rerum",
                                    maxComparisonValue: "voluptatem",
                                    metricName: "quo",
                                    operator: "BETWEEN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "tempora",
                                    expressions: [
                                      "earum",
                                    ],
                                    maxComparisonValue: "in",
                                    minComparisonValue: "molestias",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "qui",
                                    maxComparisonValue: "omnis",
                                    metricName: "ipsa",
                                    operator: "GREATER_THAN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "velit",
                                    expressions: [
                                      "rem",
                                    ],
                                    maxComparisonValue: "sint",
                                    minComparisonValue: "assumenda",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "maxime",
                                    maxComparisonValue: "in",
                                    metricName: "quo",
                                    operator: "EQUAL",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "dolor",
                                    expressions: [
                                      "consequatur",
                                      "quo",
                                      "ipsum",
                                    ],
                                    maxComparisonValue: "suscipit",
                                    minComparisonValue: "cumque",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aspernatur",
                                    maxComparisonValue: "animi",
                                    metricName: "dolorum",
                                    operator: "BETWEEN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ut",
                                    expressions: [
                                      "ut",
                                    ],
                                    maxComparisonValue: "autem",
                                    minComparisonValue: "praesentium",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "est",
                                    maxComparisonValue: "et",
                                    metricName: "et",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "vel",
                                    expressions: [
                                      "qui",
                                      "et",
                                      "dignissimos",
                                    ],
                                    maxComparisonValue: "quasi",
                                    minComparisonValue: "pariatur",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "soluta",
                                    maxComparisonValue: "rerum",
                                    metricName: "ex",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "autem",
                                    expressions: [
                                      "aut",
                                      "ipsam",
                                      "excepturi",
                                    ],
                                    maxComparisonValue: "temporibus",
                                    minComparisonValue: "eum",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quidem",
                                    maxComparisonValue: "eos",
                                    metricName: "sint",
                                    operator: "LESS_THAN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "dolores",
                                    expressions: [
                                      "sit",
                                    ],
                                    maxComparisonValue: "corrupti",
                                    minComparisonValue: "ea",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ad",
                                    maxComparisonValue: "sapiente",
                                    metricName: "quod",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "magnam",
                                expressions: [
                                  "earum",
                                  "ut",
                                ],
                                maxComparisonValue: "autem",
                                minComparisonValue: "occaecati",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "fugit",
                                maxComparisonValue: "qui",
                                metricName: "quis",
                                operator: "LESS_THAN",
                                scope: "PRODUCT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "quod",
                                expressions: [
                                  "accusantium",
                                  "impedit",
                                ],
                                maxComparisonValue: "nihil",
                                minComparisonValue: "quis",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "sapiente",
                                maxComparisonValue: "autem",
                                metricName: "omnis",
                                operator: "BETWEEN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "rem",
                                expressions: [
                                  "tempora",
                                  "praesentium",
                                ],
                                maxComparisonValue: "ab",
                                minComparisonValue: "alias",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "voluptatum",
                                maxComparisonValue: "mollitia",
                                metricName: "fugit",
                                operator: "BETWEEN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "unde",
                                expressions: [
                                  "recusandae",
                                  "consectetur",
                                ],
                                maxComparisonValue: "possimus",
                                minComparisonValue: "et",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "ut",
                                maxComparisonValue: "magnam",
                                metricName: "ea",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "USER",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "accusamus",
                                expressions: [
                                  "dolorem",
                                ],
                                maxComparisonValue: "similique",
                                minComparisonValue: "est",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "harum",
                                maxComparisonValue: "distinctio",
                                metricName: "et",
                                operator: "LESS_THAN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "aliquid",
                                expressions: [
                                  "et",
                                ],
                                maxComparisonValue: "molestiae",
                                minComparisonValue: "id",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "consequatur",
                                maxComparisonValue: "est",
                                metricName: "nemo",
                                operator: "BETWEEN",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "eveniet",
                                expressions: [
                                  "consectetur",
                                  "autem",
                                ],
                                maxComparisonValue: "quis",
                                minComparisonValue: "et",
                                operator: "IN_LIST",
                              },
                              metricFilter: {
                                comparisonValue: "commodi",
                                maxComparisonValue: "quis",
                                metricName: "dicta",
                                operator: "EQUAL",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aspernatur",
                                    expressions: [
                                      "similique",
                                      "rerum",
                                    ],
                                    maxComparisonValue: "eum",
                                    minComparisonValue: "ea",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "vitae",
                                    maxComparisonValue: "fuga",
                                    metricName: "est",
                                    operator: "LESS_THAN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "tempora",
                                    expressions: [
                                      "et",
                                    ],
                                    maxComparisonValue: "odio",
                                    minComparisonValue: "minima",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "eum",
                                    maxComparisonValue: "et",
                                    metricName: "provident",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "qui",
                                    expressions: [
                                      "tenetur",
                                      "itaque",
                                    ],
                                    maxComparisonValue: "nam",
                                    minComparisonValue: "repudiandae",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "est",
                                    maxComparisonValue: "officia",
                                    metricName: "est",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ut",
                                    expressions: [
                                      "cumque",
                                      "quo",
                                      "qui",
                                    ],
                                    maxComparisonValue: "animi",
                                    minComparisonValue: "repellendus",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "animi",
                                    maxComparisonValue: "autem",
                                    metricName: "eligendi",
                                    operator: "GREATER_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "et",
                                    expressions: [
                                      "aut",
                                      "officiis",
                                    ],
                                    maxComparisonValue: "perspiciatis",
                                    minComparisonValue: "omnis",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "soluta",
                                    maxComparisonValue: "et",
                                    metricName: "amet",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "omnis",
                                    expressions: [
                                      "eaque",
                                    ],
                                    maxComparisonValue: "recusandae",
                                    minComparisonValue: "optio",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sunt",
                                    maxComparisonValue: "perspiciatis",
                                    metricName: "cupiditate",
                                    operator: "GREATER_THAN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "voluptate",
                                    expressions: [
                                      "iure",
                                      "quasi",
                                      "ut",
                                    ],
                                    maxComparisonValue: "culpa",
                                    minComparisonValue: "et",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "optio",
                                    maxComparisonValue: "eos",
                                    metricName: "et",
                                    operator: "EQUAL",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "esse",
                                    expressions: [
                                      "deserunt",
                                      "illum",
                                      "nulla",
                                    ],
                                    maxComparisonValue: "iure",
                                    minComparisonValue: "perferendis",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quos",
                                    maxComparisonValue: "atque",
                                    metricName: "repudiandae",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ab",
                                    expressions: [
                                      "nobis",
                                      "et",
                                      "eveniet",
                                    ],
                                    maxComparisonValue: "dolore",
                                    minComparisonValue: "voluptates",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "vel",
                                    maxComparisonValue: "rerum",
                                    metricName: "consequatur",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "et",
                                expressions: [
                                  "et",
                                  "occaecati",
                                ],
                                maxComparisonValue: "ratione",
                                minComparisonValue: "in",
                                operator: "OPERATOR_UNSPECIFIED",
                              },
                              metricFilter: {
                                comparisonValue: "in",
                                maxComparisonValue: "soluta",
                                metricName: "ab",
                                operator: "LESS_THAN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "eos",
                                expressions: [
                                  "eos",
                                  "hic",
                                ],
                                maxComparisonValue: "est",
                                minComparisonValue: "voluptas",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "non",
                                maxComparisonValue: "nemo",
                                metricName: "dolor",
                                operator: "LESS_THAN",
                                scope: "USER",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ducimus",
                                expressions: [
                                  "tempore",
                                  "ab",
                                ],
                                maxComparisonValue: "et",
                                minComparisonValue: "et",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "aut",
                                maxComparisonValue: "illum",
                                metricName: "aperiam",
                                operator: "LESS_THAN",
                                scope: "HIT",
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "et",
                                    expressions: [
                                      "at",
                                      "qui",
                                    ],
                                    maxComparisonValue: "quia",
                                    minComparisonValue: "officia",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ratione",
                                    maxComparisonValue: "labore",
                                    metricName: "cupiditate",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "sit",
                                    expressions: [
                                      "voluptates",
                                    ],
                                    maxComparisonValue: "voluptate",
                                    minComparisonValue: "qui",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "consequuntur",
                                    maxComparisonValue: "illo",
                                    metricName: "quia",
                                    operator: "GREATER_THAN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "explicabo",
                                    expressions: [
                                      "animi",
                                      "omnis",
                                      "eum",
                                    ],
                                    maxComparisonValue: "recusandae",
                                    minComparisonValue: "doloribus",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "culpa",
                                    maxComparisonValue: "non",
                                    metricName: "magnam",
                                    operator: "EQUAL",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ut",
                                    expressions: [
                                      "officiis",
                                      "quaerat",
                                    ],
                                    maxComparisonValue: "aut",
                                    minComparisonValue: "quo",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "enim",
                                    maxComparisonValue: "et",
                                    metricName: "quibusdam",
                                    operator: "BETWEEN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "laudantium",
                                    expressions: [
                                      "vel",
                                    ],
                                    maxComparisonValue: "quibusdam",
                                    minComparisonValue: "deleniti",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sed",
                                    maxComparisonValue: "hic",
                                    metricName: "at",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "omnis",
                                    expressions: [
                                      "eaque",
                                    ],
                                    maxComparisonValue: "nam",
                                    minComparisonValue: "recusandae",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "nostrum",
                                    maxComparisonValue: "repellat",
                                    metricName: "dolor",
                                    operator: "GREATER_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "beatae",
                                    expressions: [
                                      "corrupti",
                                      "id",
                                    ],
                                    maxComparisonValue: "cum",
                                    minComparisonValue: "voluptas",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sed",
                                    maxComparisonValue: "laborum",
                                    metricName: "voluptatem",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "rerum",
                                    expressions: [
                                      "illo",
                                      "consequuntur",
                                      "distinctio",
                                    ],
                                    maxComparisonValue: "sunt",
                                    minComparisonValue: "qui",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quo",
                                    maxComparisonValue: "aut",
                                    metricName: "et",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "officiis",
                                    expressions: [
                                      "velit",
                                      "dolorem",
                                      "qui",
                                    ],
                                    maxComparisonValue: "ut",
                                    minComparisonValue: "fugiat",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "optio",
                                    maxComparisonValue: "totam",
                                    metricName: "consequuntur",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "modi",
                                expressions: [
                                  "qui",
                                ],
                                maxComparisonValue: "laborum",
                                minComparisonValue: "atque",
                                operator: "OPERATOR_UNSPECIFIED",
                              },
                              metricFilter: {
                                comparisonValue: "fuga",
                                maxComparisonValue: "dolores",
                                metricName: "accusantium",
                                operator: "EQUAL",
                                scope: "HIT",
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "laudantium",
                                expressions: [
                                  "veniam",
                                  "voluptate",
                                  "qui",
                                ],
                                maxComparisonValue: "in",
                                minComparisonValue: "blanditiis",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "et",
                                maxComparisonValue: "eveniet",
                                metricName: "aut",
                                operator: "GREATER_THAN",
                                scope: "USER",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "inventore",
                                expressions: [
                                  "sit",
                                ],
                                maxComparisonValue: "aliquam",
                                minComparisonValue: "dolores",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "libero",
                                maxComparisonValue: "voluptatum",
                                metricName: "optio",
                                operator: "GREATER_THAN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "voluptatem",
                                expressions: [
                                  "quod",
                                  "suscipit",
                                ],
                                maxComparisonValue: "error",
                                minComparisonValue: "sit",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "cum",
                                maxComparisonValue: "commodi",
                                metricName: "laudantium",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "sed",
                                expressions: [
                                  "explicabo",
                                ],
                                maxComparisonValue: "illo",
                                minComparisonValue: "et",
                                operator: "OPERATOR_UNSPECIFIED",
                              },
                              metricFilter: {
                                comparisonValue: "vel",
                                maxComparisonValue: "iste",
                                metricName: "occaecati",
                                operator: "EQUAL",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            segmentId: "quis",
          },
          {
            dynamicSegment: {
              name: "magnam",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "rerum",
                                    expressions: [
                                      "est",
                                      "quia",
                                      "voluptatibus",
                                    ],
                                    maxComparisonValue: "quas",
                                    minComparisonValue: "illum",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "accusantium",
                                    maxComparisonValue: "quo",
                                    metricName: "veritatis",
                                    operator: "LESS_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "autem",
                                    expressions: [
                                      "sit",
                                    ],
                                    maxComparisonValue: "id",
                                    minComparisonValue: "error",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "voluptatem",
                                    metricName: "id",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "nisi",
                                    expressions: [
                                      "eius",
                                      "quaerat",
                                      "quaerat",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "officia",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sint",
                                    maxComparisonValue: "quo",
                                    metricName: "ut",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "fuga",
                                    expressions: [
                                      "explicabo",
                                      "adipisci",
                                      "voluptas",
                                    ],
                                    maxComparisonValue: "quis",
                                    minComparisonValue: "tenetur",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "natus",
                                    maxComparisonValue: "molestiae",
                                    metricName: "culpa",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ad",
                                    expressions: [
                                      "aut",
                                      "odit",
                                    ],
                                    maxComparisonValue: "ex",
                                    minComparisonValue: "cupiditate",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aliquid",
                                    maxComparisonValue: "et",
                                    metricName: "adipisci",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "voluptas",
                                    expressions: [
                                      "debitis",
                                    ],
                                    maxComparisonValue: "animi",
                                    minComparisonValue: "molestiae",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "animi",
                                    maxComparisonValue: "consectetur",
                                    metricName: "aspernatur",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "id",
                                    expressions: [
                                      "natus",
                                    ],
                                    maxComparisonValue: "repellat",
                                    minComparisonValue: "excepturi",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quo",
                                    maxComparisonValue: "id",
                                    metricName: "dolorum",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "et",
                                expressions: [
                                  "vitae",
                                  "ut",
                                  "debitis",
                                ],
                                maxComparisonValue: "ea",
                                minComparisonValue: "natus",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "deserunt",
                                maxComparisonValue: "aliquid",
                                metricName: "nihil",
                                operator: "LESS_THAN",
                                scope: "PRODUCT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "ut",
                                expressions: [
                                  "illum",
                                  "porro",
                                ],
                                maxComparisonValue: "eaque",
                                minComparisonValue: "quis",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "qui",
                                maxComparisonValue: "et",
                                metricName: "blanditiis",
                                operator: "BETWEEN",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "cupiditate",
                                expressions: [
                                  "deserunt",
                                  "dicta",
                                  "assumenda",
                                ],
                                maxComparisonValue: "officiis",
                                minComparisonValue: "et",
                                operator: "IN_LIST",
                              },
                              metricFilter: {
                                comparisonValue: "in",
                                maxComparisonValue: "consequatur",
                                metricName: "rerum",
                                operator: "GREATER_THAN",
                                scope: "HIT",
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "vitae",
                                expressions: [
                                  "quia",
                                ],
                                maxComparisonValue: "consequuntur",
                                minComparisonValue: "aspernatur",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "sed",
                                maxComparisonValue: "vel",
                                metricName: "aut",
                                operator: "EQUAL",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "sequi",
                                expressions: [
                                  "consectetur",
                                ],
                                maxComparisonValue: "voluptatem",
                                minComparisonValue: "fugit",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "in",
                                maxComparisonValue: "iure",
                                metricName: "ullam",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "esse",
                                expressions: [
                                  "voluptatem",
                                ],
                                maxComparisonValue: "numquam",
                                minComparisonValue: "laudantium",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "dicta",
                                maxComparisonValue: "magnam",
                                metricName: "id",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "PRODUCT",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "porro",
                                    expressions: [
                                      "suscipit",
                                    ],
                                    maxComparisonValue: "accusamus",
                                    minComparisonValue: "sit",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sit",
                                    maxComparisonValue: "magnam",
                                    metricName: "dolores",
                                    operator: "LESS_THAN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "voluptatum",
                                    expressions: [
                                      "quaerat",
                                      "deserunt",
                                    ],
                                    maxComparisonValue: "qui",
                                    minComparisonValue: "ea",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "omnis",
                                    maxComparisonValue: "ut",
                                    metricName: "blanditiis",
                                    operator: "EQUAL",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ut",
                                    expressions: [
                                      "autem",
                                      "architecto",
                                    ],
                                    maxComparisonValue: "autem",
                                    minComparisonValue: "nesciunt",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "aut",
                                    metricName: "ducimus",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "vel",
                                    expressions: [
                                      "debitis",
                                    ],
                                    maxComparisonValue: "voluptates",
                                    minComparisonValue: "et",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "iste",
                                    maxComparisonValue: "asperiores",
                                    metricName: "ea",
                                    operator: "BETWEEN",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "maiores",
                                    expressions: [
                                      "eos",
                                    ],
                                    maxComparisonValue: "assumenda",
                                    minComparisonValue: "repellat",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ut",
                                    maxComparisonValue: "et",
                                    metricName: "minima",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "quos",
                                    expressions: [
                                      "accusamus",
                                      "rerum",
                                    ],
                                    maxComparisonValue: "eos",
                                    minComparisonValue: "est",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "enim",
                                    maxComparisonValue: "illum",
                                    metricName: "necessitatibus",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ut",
                                    expressions: [
                                      "numquam",
                                      "culpa",
                                      "et",
                                    ],
                                    maxComparisonValue: "provident",
                                    minComparisonValue: "id",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "rerum",
                                    maxComparisonValue: "sed",
                                    metricName: "assumenda",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "culpa",
                                    expressions: [
                                      "enim",
                                      "id",
                                      "corporis",
                                    ],
                                    maxComparisonValue: "facere",
                                    minComparisonValue: "eligendi",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "velit",
                                    maxComparisonValue: "et",
                                    metricName: "minus",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sunt",
                                    expressions: [
                                      "qui",
                                    ],
                                    maxComparisonValue: "occaecati",
                                    minComparisonValue: "quaerat",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "eum",
                                    maxComparisonValue: "voluptatem",
                                    metricName: "quod",
                                    operator: "GREATER_THAN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "possimus",
                                    expressions: [
                                      "id",
                                      "excepturi",
                                      "rerum",
                                    ],
                                    maxComparisonValue: "labore",
                                    minComparisonValue: "nesciunt",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "minus",
                                    maxComparisonValue: "velit",
                                    metricName: "est",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "qui",
                                expressions: [
                                  "ea",
                                  "ut",
                                  "aspernatur",
                                ],
                                maxComparisonValue: "qui",
                                minComparisonValue: "praesentium",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "sit",
                                maxComparisonValue: "sed",
                                metricName: "in",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "PRODUCT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "odit",
                                expressions: [
                                  "sequi",
                                  "molestias",
                                ],
                                maxComparisonValue: "ipsa",
                                minComparisonValue: "quisquam",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "quos",
                                maxComparisonValue: "beatae",
                                metricName: "repudiandae",
                                operator: "GREATER_THAN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "voluptatem",
                                    expressions: [
                                      "qui",
                                      "fuga",
                                    ],
                                    maxComparisonValue: "pariatur",
                                    minComparisonValue: "voluptatibus",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ipsum",
                                    maxComparisonValue: "aut",
                                    metricName: "quaerat",
                                    operator: "BETWEEN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "saepe",
                                    expressions: [
                                      "tempora",
                                      "voluptatibus",
                                      "a",
                                    ],
                                    maxComparisonValue: "qui",
                                    minComparisonValue: "numquam",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "placeat",
                                    maxComparisonValue: "perspiciatis",
                                    metricName: "porro",
                                    operator: "EQUAL",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "sunt",
                                    expressions: [
                                      "aspernatur",
                                      "iusto",
                                    ],
                                    maxComparisonValue: "quam",
                                    minComparisonValue: "maiores",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "consequatur",
                                    maxComparisonValue: "in",
                                    metricName: "enim",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "alias",
                                    expressions: [
                                      "ea",
                                      "quia",
                                    ],
                                    maxComparisonValue: "labore",
                                    minComparisonValue: "vitae",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "dicta",
                                    maxComparisonValue: "aut",
                                    metricName: "quam",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "itaque",
                                    expressions: [
                                      "id",
                                    ],
                                    maxComparisonValue: "omnis",
                                    minComparisonValue: "ratione",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "consequatur",
                                    maxComparisonValue: "reprehenderit",
                                    metricName: "molestiae",
                                    operator: "EQUAL",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ipsam",
                                    expressions: [
                                      "earum",
                                      "hic",
                                      "id",
                                    ],
                                    maxComparisonValue: "id",
                                    minComparisonValue: "labore",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "eum",
                                    maxComparisonValue: "exercitationem",
                                    metricName: "quam",
                                    operator: "GREATER_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ut",
                                    expressions: [
                                      "voluptates",
                                      "omnis",
                                    ],
                                    maxComparisonValue: "sint",
                                    minComparisonValue: "officia",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "laboriosam",
                                    maxComparisonValue: "molestiae",
                                    metricName: "ipsa",
                                    operator: "BETWEEN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "laborum",
                                    expressions: [
                                      "ab",
                                      "impedit",
                                      "ut",
                                    ],
                                    maxComparisonValue: "eum",
                                    minComparisonValue: "reiciendis",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "soluta",
                                    maxComparisonValue: "voluptatem",
                                    metricName: "quis",
                                    operator: "GREATER_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "atque",
                                    expressions: [
                                      "ex",
                                      "odio",
                                    ],
                                    maxComparisonValue: "a",
                                    minComparisonValue: "sed",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quo",
                                    maxComparisonValue: "laboriosam",
                                    metricName: "facere",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "dolorum",
                                    expressions: [
                                      "voluptates",
                                      "natus",
                                    ],
                                    maxComparisonValue: "laboriosam",
                                    minComparisonValue: "quibusdam",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "error",
                                    maxComparisonValue: "voluptates",
                                    metricName: "dolores",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "eos",
                                    expressions: [
                                      "unde",
                                      "sint",
                                      "voluptatem",
                                    ],
                                    maxComparisonValue: "possimus",
                                    minComparisonValue: "id",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "qui",
                                    maxComparisonValue: "dolore",
                                    metricName: "aut",
                                    operator: "EQUAL",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "cum",
                                    expressions: [
                                      "iure",
                                      "voluptatem",
                                      "quae",
                                    ],
                                    maxComparisonValue: "non",
                                    minComparisonValue: "consectetur",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "doloribus",
                                    maxComparisonValue: "illum",
                                    metricName: "aut",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "aut",
                                    expressions: [
                                      "porro",
                                    ],
                                    maxComparisonValue: "ut",
                                    minComparisonValue: "id",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "distinctio",
                                    metricName: "sint",
                                    operator: "BETWEEN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "rerum",
                                    expressions: [
                                      "cum",
                                    ],
                                    maxComparisonValue: "ratione",
                                    minComparisonValue: "eum",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "nisi",
                                    metricName: "velit",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "consequatur",
                                expressions: [
                                  "sint",
                                  "iusto",
                                ],
                                maxComparisonValue: "deleniti",
                                minComparisonValue: "aperiam",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "eius",
                                maxComparisonValue: "debitis",
                                metricName: "sit",
                                operator: "EQUAL",
                                scope: "PRODUCT",
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "voluptate",
                                expressions: [
                                  "earum",
                                  "vel",
                                  "velit",
                                ],
                                maxComparisonValue: "assumenda",
                                minComparisonValue: "nemo",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "sed",
                                maxComparisonValue: "aut",
                                metricName: "pariatur",
                                operator: "BETWEEN",
                                scope: "HIT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "alias",
                                expressions: [
                                  "quasi",
                                  "minus",
                                  "optio",
                                ],
                                maxComparisonValue: "deserunt",
                                minComparisonValue: "corporis",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "recusandae",
                                maxComparisonValue: "pariatur",
                                metricName: "pariatur",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "HIT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "officiis",
                                expressions: [
                                  "repudiandae",
                                  "similique",
                                ],
                                maxComparisonValue: "et",
                                minComparisonValue: "itaque",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "minima",
                                maxComparisonValue: "placeat",
                                metricName: "blanditiis",
                                operator: "EQUAL",
                                scope: "USER",
                              },
                              not: true,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "et",
                                expressions: [
                                  "est",
                                ],
                                maxComparisonValue: "doloremque",
                                minComparisonValue: "cumque",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "error",
                                maxComparisonValue: "officia",
                                metricName: "illo",
                                operator: "GREATER_THAN",
                                scope: "HIT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "aut",
                                expressions: [
                                  "sit",
                                  "dolorum",
                                  "soluta",
                                ],
                                maxComparisonValue: "dicta",
                                minComparisonValue: "perspiciatis",
                                operator: "IN_LIST",
                              },
                              metricFilter: {
                                comparisonValue: "tenetur",
                                maxComparisonValue: "quasi",
                                metricName: "consequuntur",
                                operator: "EQUAL",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "soluta",
                                expressions: [
                                  "iusto",
                                ],
                                maxComparisonValue: "consequatur",
                                minComparisonValue: "eum",
                                operator: "OPERATOR_UNSPECIFIED",
                              },
                              metricFilter: {
                                comparisonValue: "nihil",
                                maxComparisonValue: "ut",
                                metricName: "qui",
                                operator: "EQUAL",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              userSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "magnam",
                                    expressions: [
                                      "reiciendis",
                                      "ut",
                                      "adipisci",
                                    ],
                                    maxComparisonValue: "repellat",
                                    minComparisonValue: "quibusdam",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "cum",
                                    maxComparisonValue: "aut",
                                    metricName: "modi",
                                    operator: "GREATER_THAN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "temporibus",
                                    expressions: [
                                      "fugit",
                                      "omnis",
                                      "aperiam",
                                    ],
                                    maxComparisonValue: "ipsam",
                                    minComparisonValue: "tenetur",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "rerum",
                                    maxComparisonValue: "laborum",
                                    metricName: "sapiente",
                                    operator: "GREATER_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "incidunt",
                                    expressions: [
                                      "adipisci",
                                      "ut",
                                      "blanditiis",
                                    ],
                                    maxComparisonValue: "saepe",
                                    minComparisonValue: "nesciunt",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "labore",
                                    maxComparisonValue: "illum",
                                    metricName: "omnis",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "eius",
                                    expressions: [
                                      "quisquam",
                                      "possimus",
                                      "sed",
                                    ],
                                    maxComparisonValue: "labore",
                                    minComparisonValue: "nemo",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quam",
                                    maxComparisonValue: "libero",
                                    metricName: "voluptate",
                                    operator: "EQUAL",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "numquam",
                                    expressions: [
                                      "cumque",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "voluptatum",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "non",
                                    maxComparisonValue: "totam",
                                    metricName: "est",
                                    operator: "GREATER_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "accusantium",
                                    expressions: [
                                      "voluptas",
                                    ],
                                    maxComparisonValue: "voluptatem",
                                    minComparisonValue: "maxime",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "eum",
                                    maxComparisonValue: "modi",
                                    metricName: "quis",
                                    operator: "EQUAL",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "neque",
                                    expressions: [
                                      "et",
                                    ],
                                    maxComparisonValue: "voluptas",
                                    minComparisonValue: "qui",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "accusamus",
                                    maxComparisonValue: "necessitatibus",
                                    metricName: "provident",
                                    operator: "GREATER_THAN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "repudiandae",
                                expressions: [
                                  "eum",
                                  "aut",
                                  "quia",
                                ],
                                maxComparisonValue: "velit",
                                minComparisonValue: "unde",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "libero",
                                maxComparisonValue: "enim",
                                metricName: "exercitationem",
                                operator: "LESS_THAN",
                                scope: "PRODUCT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "est",
                                expressions: [
                                  "commodi",
                                  "impedit",
                                ],
                                maxComparisonValue: "ipsa",
                                minComparisonValue: "ut",
                                operator: "IN_LIST",
                              },
                              metricFilter: {
                                comparisonValue: "aut",
                                maxComparisonValue: "aut",
                                metricName: "consequuntur",
                                operator: "BETWEEN",
                                scope: "PRODUCT",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            segmentId: "voluptatem",
          },
        ],
        viewId: "molestiae",
      },
    ],
    useResourceQuotas: false,
  },
};

sdk.reports.analyticsreportingReportsBatchGet(req).then((res: AnalyticsreportingReportsBatchGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### reports

* `analyticsreportingReportsBatchGet` - Returns the Analytics data.

### userActivity

* `analyticsreportingUserActivitySearch` - Returns User Activity data.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
