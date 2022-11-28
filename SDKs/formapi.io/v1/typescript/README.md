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
import { AddFieldsToTemplateRequest, AddFieldsToTemplateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AddFieldsToTemplateRequest = {
  security: {
    apiTokenBasic: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    templateId: "officiis",
  },
  request: {
    fields: [
      {
        alignment: "right",
        autoCalculateMaxLength: false,
        backgroundColor: "enim",
        backgroundColorFieldName: "sint",
        backgroundColorFieldRequired: false,
        barcodeSymbology: "exercitationem",
        bold: false,
        characterSpacing: 79.199997,
        checkCharacter: "&#10004;",
        checkColor: "ex",
        checkColorFieldName: "ex",
        checkColorFieldRequired: true,
        color: "consequuntur",
        colorFieldName: "et",
        colorFieldRequired: false,
        comb: false,
        combNumberOfCells: 69.099998,
        combValueOffset: 22.100000,
        combinedFieldFormat: "temporibus",
        combinedFieldNames: "et",
        combinedFieldSeparator: "vitae",
        combinedFieldType: "qui",
        condition: "necessitatibus",
        currency: true,
        dateTimeFormat: "itaque",
        decimalPlaces: 60.099998,
        default: "harum",
        description: "est",
        displayType: "text",
        exclusiveMaximum: false,
        exclusiveMinimum: false,
        falseText: "sit",
        fontSize: 99.199997,
        height: 15.100000,
        hidden: false,
        id: 31.200001,
        imageGravity: "Center",
        imageScaleType: "fit",
        includeTime: false,
        integer: true,
        invertBooleanCondition: true,
        maxLength: 9.100000,
        maximum: 33.099998,
        metadata: "sit",
        minLength: 34.200001,
        minimum: 81.099998,
        multiline: false,
        multilineLines: 87.199997,
        name: "excepturi",
        numberConditionRangeExclusiveMax: false,
        numberConditionRangeExclusiveMin: true,
        numberConditionRangeMax: 15.200000,
        numberConditionRangeMin: 91.099998,
        numberConditionType: "range",
        opacity: 1.200000,
        optionList: "perspiciatis",
        overflow: "truncate",
        page: 94.199997,
        qrcodeColor: "eum",
        qrcodeColorFieldName: "totam",
        qrcodeColorFieldRequired: true,
        required: true,
        rotation: 49.200001,
        shapeBorderColor: "ea",
        shapeBorderColorFieldName: "omnis",
        shapeBorderColorFieldRequired: false,
        shapeBorderWidth: 73.099998,
        shapeFillColor: "et",
        shapeFillColorFieldName: "nostrum",
        shapeFillColorFieldRequired: true,
        shapeType: "circle",
        signatureAllowDraw: false,
        signatureAllowType: true,
        static: false,
        strikethrough: false,
        stringConditionType: "contains",
        title: "occaecati",
        trueText: "et",
        type: "address",
        typeface: "doloribus",
        uppercase: false,
        vAlignment: "bottom",
        width: 98.199997,
        x: 21.100000,
        y: 33.099998,
      },
      {
        alignment: "right",
        autoCalculateMaxLength: true,
        backgroundColor: "a",
        backgroundColorFieldName: "minima",
        backgroundColorFieldRequired: true,
        barcodeSymbology: "ducimus",
        bold: true,
        characterSpacing: 72.199997,
        checkCharacter: "&#10003;",
        checkColor: "est",
        checkColorFieldName: "voluptas",
        checkColorFieldRequired: false,
        color: "repudiandae",
        colorFieldName: "maxime",
        colorFieldRequired: false,
        comb: true,
        combNumberOfCells: 85.199997,
        combValueOffset: 19.200001,
        combinedFieldFormat: "aut",
        combinedFieldNames: "aut",
        combinedFieldSeparator: "possimus",
        combinedFieldType: "qui",
        condition: "accusamus",
        currency: false,
        dateTimeFormat: "molestiae",
        decimalPlaces: 53.099998,
        default: "quae",
        description: "voluptatum",
        displayType: "text",
        exclusiveMaximum: false,
        exclusiveMinimum: false,
        falseText: "molestias",
        fontSize: 20.200001,
        height: 32.200001,
        hidden: true,
        id: 76.099998,
        imageGravity: "East",
        imageScaleType: "stretch",
        includeTime: true,
        integer: false,
        invertBooleanCondition: true,
        maxLength: 64.199997,
        maximum: 18.200001,
        metadata: "vel",
        minLength: 99.199997,
        minimum: 1.200000,
        multiline: true,
        multilineLines: 30.200001,
        name: "ut",
        numberConditionRangeExclusiveMax: false,
        numberConditionRangeExclusiveMin: true,
        numberConditionRangeMax: 57.099998,
        numberConditionRangeMin: 47.099998,
        numberConditionType: "gt",
        opacity: 16.200001,
        optionList: "sit",
        overflow: "truncate",
        page: 61.200001,
        qrcodeColor: "nesciunt",
        qrcodeColorFieldName: "ea",
        qrcodeColorFieldRequired: false,
        required: true,
        rotation: 49.099998,
        shapeBorderColor: "accusamus",
        shapeBorderColorFieldName: "magni",
        shapeBorderColorFieldRequired: false,
        shapeBorderWidth: 10.100000,
        shapeFillColor: "labore",
        shapeFillColorFieldName: "maiores",
        shapeFillColorFieldRequired: false,
        shapeType: "ellipse",
        signatureAllowDraw: false,
        signatureAllowType: true,
        static: false,
        strikethrough: true,
        stringConditionType: "ends_with",
        title: "eveniet",
        trueText: "doloremque",
        type: "email",
        typeface: "eligendi",
        uppercase: false,
        vAlignment: "center",
        width: 72.199997,
        x: 38.200001,
        y: 70.199997,
      },
      {
        alignment: "center",
        autoCalculateMaxLength: true,
        backgroundColor: "voluptatum",
        backgroundColorFieldName: "delectus",
        backgroundColorFieldRequired: true,
        barcodeSymbology: "perferendis",
        bold: false,
        characterSpacing: 6.200000,
        checkCharacter: "&#10003;",
        checkColor: "sed",
        checkColorFieldName: "quae",
        checkColorFieldRequired: false,
        color: "aut",
        colorFieldName: "cum",
        colorFieldRequired: true,
        comb: false,
        combNumberOfCells: 91.199997,
        combValueOffset: 36.099998,
        combinedFieldFormat: "rerum",
        combinedFieldNames: "deserunt",
        combinedFieldSeparator: "blanditiis",
        combinedFieldType: "a",
        condition: "in",
        currency: false,
        dateTimeFormat: "tenetur",
        decimalPlaces: 75.199997,
        default: "aperiam",
        description: "corrupti",
        displayType: "shape",
        exclusiveMaximum: false,
        exclusiveMinimum: true,
        falseText: "cum",
        fontSize: 35.099998,
        height: 46.099998,
        hidden: false,
        id: 95.199997,
        imageGravity: "Center",
        imageScaleType: "fill",
        includeTime: false,
        integer: false,
        invertBooleanCondition: true,
        maxLength: 38.200001,
        maximum: 29.100000,
        metadata: "mollitia",
        minLength: 83.199997,
        minimum: 95.199997,
        multiline: false,
        multilineLines: 54.099998,
        name: "odit",
        numberConditionRangeExclusiveMax: true,
        numberConditionRangeExclusiveMin: false,
        numberConditionRangeMax: 19.200001,
        numberConditionRangeMin: 36.099998,
        numberConditionType: "gt",
        opacity: 35.099998,
        optionList: "eos",
        overflow: "shrink_to_fit",
        page: 15.100000,
        qrcodeColor: "ipsam",
        qrcodeColorFieldName: "velit",
        qrcodeColorFieldRequired: false,
        required: false,
        rotation: 12.200000,
        shapeBorderColor: "et",
        shapeBorderColorFieldName: "inventore",
        shapeBorderColorFieldRequired: true,
        shapeBorderWidth: 57.099998,
        shapeFillColor: "pariatur",
        shapeFillColorFieldName: "quia",
        shapeFillColorFieldRequired: false,
        shapeType: "circle",
        signatureAllowDraw: true,
        signatureAllowType: false,
        static: true,
        strikethrough: true,
        stringConditionType: "regex",
        title: "quia",
        trueText: "eos",
        type: "barcode",
        typeface: "id",
        uppercase: false,
        vAlignment: "top",
        width: 22.100000,
        x: 35.200001,
        y: 45.099998,
      },
    ],
  },
};

sdk.sdk.addFieldsToTemplate(req).then((res: AddFieldsToTemplateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `addFieldsToTemplate` - Add new fields to a Template
* `batchGeneratePdfV1` - Generates multiple PDFs
* `batchGeneratePdfs` - Generates multiple PDFs
* `combinePdfs` - Merge submission PDFs, template PDFs, or custom files
* `combineSubmissions` - Merge generated PDFs together
* `copyTemplate` - Copy a Template
* `createCustomFileFromUpload` - Create a new custom file from a cached presign upload
* `createDataRequestToken` - Creates a new data request token for form authentication
* `createFolder` - Create a folder
* `createHtmlTemplate` - Create a new HTML template
* `createPdfTemplate` - Create a new PDF template with a form POST file upload
* `createPdfTemplateFromUpload` - Create a new PDF template from a cached presign upload
* `deleteFolder` - Delete a folder
* `expireCombinedSubmission` - Expire a combined submission
* `expireSubmission` - Expire a PDF submission
* `generatePdf` - Generates a new PDF
* `getCombinedSubmission` - Check the status of a combined submission (merged PDFs)
* `getDataRequest` - Look up a submission data request
* `getPresignUrl` - Get a presigned URL so that you can upload a file to our AWS S3 bucket
* `getSubmission` - Check the status of a PDF
* `getSubmissionBatch` - Check the status of a submission batch job
* `getTemplate` - Get a single template
* `getTemplateSchema` - Fetch the JSON schema for a template
* `listFolders` - Get a list of all folders
* `listTemplates` - Get a list of all templates
* `moveFolderToFolder` - Move a folder
* `moveTemplateToFolder` - Move Template to folder
* `renameFolder` - Rename a folder
* `testAuthentication` - Test Authentication
* `updateDataRequest` - Update a submission data request
* `updateTemplate` - Update a Template

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
