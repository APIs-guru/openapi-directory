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
    
    req := operations.AddFieldsToTemplateRequest{
        Security: operations.AddFieldsToTemplateSecurity{
            APITokenBasic: shared.SchemeAPITokenBasic{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.AddFieldsToTemplatePathParams{
            TemplateID: "officiis",
        },
        Request: operations.AddFieldsToTemplateAddFieldsData{
            Fields: []AddFieldsToTemplateAddFieldsDataFields{
                operations.AddFieldsToTemplateAddFieldsDataFields{
                    Alignment: "right",
                    AutoCalculateMaxLength: false,
                    BackgroundColor: "enim",
                    BackgroundColorFieldName: "sint",
                    BackgroundColorFieldRequired: false,
                    BarcodeSymbology: "exercitationem",
                    Bold: false,
                    CharacterSpacing: 79.199997,
                    CheckCharacter: "&#10004;",
                    CheckColor: "ex",
                    CheckColorFieldName: "ex",
                    CheckColorFieldRequired: true,
                    Color: "consequuntur",
                    ColorFieldName: "et",
                    ColorFieldRequired: false,
                    Comb: false,
                    CombNumberOfCells: 69.099998,
                    CombValueOffset: 22.100000,
                    CombinedFieldFormat: "temporibus",
                    CombinedFieldNames: "et",
                    CombinedFieldSeparator: "vitae",
                    CombinedFieldType: "qui",
                    Condition: "necessitatibus",
                    Currency: true,
                    DateTimeFormat: "itaque",
                    DecimalPlaces: 60.099998,
                    Default: "harum",
                    Description: "est",
                    DisplayType: "text",
                    ExclusiveMaximum: false,
                    ExclusiveMinimum: false,
                    FalseText: "sit",
                    FontSize: 99.199997,
                    Height: 15.100000,
                    Hidden: false,
                    ID: 31.200001,
                    ImageGravity: "Center",
                    ImageScaleType: "fit",
                    IncludeTime: false,
                    Integer: true,
                    InvertBooleanCondition: true,
                    MaxLength: 9.100000,
                    Maximum: 33.099998,
                    Metadata: "sit",
                    MinLength: 34.200001,
                    Minimum: 81.099998,
                    Multiline: false,
                    MultilineLines: 87.199997,
                    Name: "excepturi",
                    NumberConditionRangeExclusiveMax: false,
                    NumberConditionRangeExclusiveMin: true,
                    NumberConditionRangeMax: 15.200000,
                    NumberConditionRangeMin: 91.099998,
                    NumberConditionType: "range",
                    Opacity: 1.200000,
                    OptionList: "perspiciatis",
                    Overflow: "truncate",
                    Page: 94.199997,
                    QrcodeColor: "eum",
                    QrcodeColorFieldName: "totam",
                    QrcodeColorFieldRequired: true,
                    Required: true,
                    Rotation: 49.200001,
                    ShapeBorderColor: "ea",
                    ShapeBorderColorFieldName: "omnis",
                    ShapeBorderColorFieldRequired: false,
                    ShapeBorderWidth: 73.099998,
                    ShapeFillColor: "et",
                    ShapeFillColorFieldName: "nostrum",
                    ShapeFillColorFieldRequired: true,
                    ShapeType: "circle",
                    SignatureAllowDraw: false,
                    SignatureAllowType: true,
                    Static: false,
                    Strikethrough: false,
                    StringConditionType: "contains",
                    Title: "occaecati",
                    TrueText: "et",
                    Type: "address",
                    Typeface: "doloribus",
                    Uppercase: false,
                    VAlignment: "bottom",
                    Width: 98.199997,
                    X: 21.100000,
                    Y: 33.099998,
                },
                operations.AddFieldsToTemplateAddFieldsDataFields{
                    Alignment: "right",
                    AutoCalculateMaxLength: true,
                    BackgroundColor: "a",
                    BackgroundColorFieldName: "minima",
                    BackgroundColorFieldRequired: true,
                    BarcodeSymbology: "ducimus",
                    Bold: true,
                    CharacterSpacing: 72.199997,
                    CheckCharacter: "&#10003;",
                    CheckColor: "est",
                    CheckColorFieldName: "voluptas",
                    CheckColorFieldRequired: false,
                    Color: "repudiandae",
                    ColorFieldName: "maxime",
                    ColorFieldRequired: false,
                    Comb: true,
                    CombNumberOfCells: 85.199997,
                    CombValueOffset: 19.200001,
                    CombinedFieldFormat: "aut",
                    CombinedFieldNames: "aut",
                    CombinedFieldSeparator: "possimus",
                    CombinedFieldType: "qui",
                    Condition: "accusamus",
                    Currency: false,
                    DateTimeFormat: "molestiae",
                    DecimalPlaces: 53.099998,
                    Default: "quae",
                    Description: "voluptatum",
                    DisplayType: "text",
                    ExclusiveMaximum: false,
                    ExclusiveMinimum: false,
                    FalseText: "molestias",
                    FontSize: 20.200001,
                    Height: 32.200001,
                    Hidden: true,
                    ID: 76.099998,
                    ImageGravity: "East",
                    ImageScaleType: "stretch",
                    IncludeTime: true,
                    Integer: false,
                    InvertBooleanCondition: true,
                    MaxLength: 64.199997,
                    Maximum: 18.200001,
                    Metadata: "vel",
                    MinLength: 99.199997,
                    Minimum: 1.200000,
                    Multiline: true,
                    MultilineLines: 30.200001,
                    Name: "ut",
                    NumberConditionRangeExclusiveMax: false,
                    NumberConditionRangeExclusiveMin: true,
                    NumberConditionRangeMax: 57.099998,
                    NumberConditionRangeMin: 47.099998,
                    NumberConditionType: "gt",
                    Opacity: 16.200001,
                    OptionList: "sit",
                    Overflow: "truncate",
                    Page: 61.200001,
                    QrcodeColor: "nesciunt",
                    QrcodeColorFieldName: "ea",
                    QrcodeColorFieldRequired: false,
                    Required: true,
                    Rotation: 49.099998,
                    ShapeBorderColor: "accusamus",
                    ShapeBorderColorFieldName: "magni",
                    ShapeBorderColorFieldRequired: false,
                    ShapeBorderWidth: 10.100000,
                    ShapeFillColor: "labore",
                    ShapeFillColorFieldName: "maiores",
                    ShapeFillColorFieldRequired: false,
                    ShapeType: "ellipse",
                    SignatureAllowDraw: false,
                    SignatureAllowType: true,
                    Static: false,
                    Strikethrough: true,
                    StringConditionType: "ends_with",
                    Title: "eveniet",
                    TrueText: "doloremque",
                    Type: "email",
                    Typeface: "eligendi",
                    Uppercase: false,
                    VAlignment: "center",
                    Width: 72.199997,
                    X: 38.200001,
                    Y: 70.199997,
                },
                operations.AddFieldsToTemplateAddFieldsDataFields{
                    Alignment: "center",
                    AutoCalculateMaxLength: true,
                    BackgroundColor: "voluptatum",
                    BackgroundColorFieldName: "delectus",
                    BackgroundColorFieldRequired: true,
                    BarcodeSymbology: "perferendis",
                    Bold: false,
                    CharacterSpacing: 6.200000,
                    CheckCharacter: "&#10003;",
                    CheckColor: "sed",
                    CheckColorFieldName: "quae",
                    CheckColorFieldRequired: false,
                    Color: "aut",
                    ColorFieldName: "cum",
                    ColorFieldRequired: true,
                    Comb: false,
                    CombNumberOfCells: 91.199997,
                    CombValueOffset: 36.099998,
                    CombinedFieldFormat: "rerum",
                    CombinedFieldNames: "deserunt",
                    CombinedFieldSeparator: "blanditiis",
                    CombinedFieldType: "a",
                    Condition: "in",
                    Currency: false,
                    DateTimeFormat: "tenetur",
                    DecimalPlaces: 75.199997,
                    Default: "aperiam",
                    Description: "corrupti",
                    DisplayType: "shape",
                    ExclusiveMaximum: false,
                    ExclusiveMinimum: true,
                    FalseText: "cum",
                    FontSize: 35.099998,
                    Height: 46.099998,
                    Hidden: false,
                    ID: 95.199997,
                    ImageGravity: "Center",
                    ImageScaleType: "fill",
                    IncludeTime: false,
                    Integer: false,
                    InvertBooleanCondition: true,
                    MaxLength: 38.200001,
                    Maximum: 29.100000,
                    Metadata: "mollitia",
                    MinLength: 83.199997,
                    Minimum: 95.199997,
                    Multiline: false,
                    MultilineLines: 54.099998,
                    Name: "odit",
                    NumberConditionRangeExclusiveMax: true,
                    NumberConditionRangeExclusiveMin: false,
                    NumberConditionRangeMax: 19.200001,
                    NumberConditionRangeMin: 36.099998,
                    NumberConditionType: "gt",
                    Opacity: 35.099998,
                    OptionList: "eos",
                    Overflow: "shrink_to_fit",
                    Page: 15.100000,
                    QrcodeColor: "ipsam",
                    QrcodeColorFieldName: "velit",
                    QrcodeColorFieldRequired: false,
                    Required: false,
                    Rotation: 12.200000,
                    ShapeBorderColor: "et",
                    ShapeBorderColorFieldName: "inventore",
                    ShapeBorderColorFieldRequired: true,
                    ShapeBorderWidth: 57.099998,
                    ShapeFillColor: "pariatur",
                    ShapeFillColorFieldName: "quia",
                    ShapeFillColorFieldRequired: false,
                    ShapeType: "circle",
                    SignatureAllowDraw: true,
                    SignatureAllowType: false,
                    Static: true,
                    Strikethrough: true,
                    StringConditionType: "regex",
                    Title: "quia",
                    TrueText: "eos",
                    Type: "barcode",
                    Typeface: "id",
                    Uppercase: false,
                    VAlignment: "top",
                    Width: 22.100000,
                    X: 35.200001,
                    Y: 45.099998,
                },
            },
        },
    }
    
    res, err := s.Sdk.AddFieldsToTemplate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddFieldsTemplateResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AddFieldsToTemplate` - Add new fields to a Template
* `BatchGeneratePdfV1` - Generates multiple PDFs
* `BatchGeneratePdfs` - Generates multiple PDFs
* `CombinePdfs` - Merge submission PDFs, template PDFs, or custom files
* `CombineSubmissions` - Merge generated PDFs together
* `CopyTemplate` - Copy a Template
* `CreateCustomFileFromUpload` - Create a new custom file from a cached presign upload
* `CreateDataRequestToken` - Creates a new data request token for form authentication
* `CreateFolder` - Create a folder
* `CreateHTMLTemplate` - Create a new HTML template
* `CreatePdfTemplate` - Create a new PDF template with a form POST file upload
* `CreatePdfTemplateFromUpload` - Create a new PDF template from a cached presign upload
* `DeleteFolder` - Delete a folder
* `ExpireCombinedSubmission` - Expire a combined submission
* `ExpireSubmission` - Expire a PDF submission
* `GeneratePdf` - Generates a new PDF
* `GetCombinedSubmission` - Check the status of a combined submission (merged PDFs)
* `GetDataRequest` - Look up a submission data request
* `GetPresignURL` - Get a presigned URL so that you can upload a file to our AWS S3 bucket
* `GetSubmission` - Check the status of a PDF
* `GetSubmissionBatch` - Check the status of a submission batch job
* `GetTemplate` - Get a single template
* `GetTemplateSchema` - Fetch the JSON schema for a template
* `ListFolders` - Get a list of all folders
* `ListTemplates` - Get a list of all templates
* `MoveFolderToFolder` - Move a folder
* `MoveTemplateToFolder` - Move Template to folder
* `RenameFolder` - Rename a folder
* `TestAuthentication` - Test Authentication
* `UpdateDataRequest` - Update a submission data request
* `UpdateTemplate` - Update a Template

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
