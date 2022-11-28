var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var ImportExternalApiSpecificationRequestBodyInputInfoLicense = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInputInfoLicense, _super);
    function ImportExternalApiSpecificationRequestBodyInputInfoLicense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBodyInputInfoLicense.prototype, "name", void 0);
    return ImportExternalApiSpecificationRequestBodyInputInfoLicense;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInputInfoLicense };
var ImportExternalApiSpecificationRequestBodyInputInfo = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInputInfo, _super);
    function ImportExternalApiSpecificationRequestBodyInputInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", ImportExternalApiSpecificationRequestBodyInputInfoLicense)
    ], ImportExternalApiSpecificationRequestBodyInputInfo.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBodyInputInfo.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBodyInputInfo.prototype, "version", void 0);
    return ImportExternalApiSpecificationRequestBodyInputInfo;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInputInfo };
var ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema, _super);
    function ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema.prototype, "type", void 0);
    return ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema };
var ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters, _super);
    function ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=in" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters.prototype, "in", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters.prototype, "required", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters.prototype, "schema", void 0);
    return ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters };
var ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode, _super);
    function ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode.prototype, "type", void 0);
    return ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode };
var ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage, _super);
    function ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage.prototype, "type", void 0);
    return ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage };
var ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties, _super);
    function ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties.prototype, "message", void 0);
    return ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties };
var ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema, _super);
    function ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Array)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema.prototype, "required", void 0);
    return ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema };
var ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson, _super);
    function ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson.prototype, "schema", void 0);
    return ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson };
var ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent, _super);
    function ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=application/json" }),
        __metadata("design:type", ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent.prototype, "applicationJson", void 0);
    return ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent };
var ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault, _super);
    function ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault.prototype, "description", void 0);
    return ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault };
var ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses, _super);
    function ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default" }),
        __metadata("design:type", ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses.prototype, "default", void 0);
    return ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses };
var ImportExternalApiSpecificationRequestBodyInputPathsPetsGet = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInputPathsPetsGet, _super);
    function ImportExternalApiSpecificationRequestBodyInputPathsPetsGet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationId" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGet.prototype, "operationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters }),
        __metadata("design:type", Array)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGet.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responses" }),
        __metadata("design:type", ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGet.prototype, "responses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPetsGet.prototype, "summary", void 0);
    return ImportExternalApiSpecificationRequestBodyInputPathsPetsGet;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInputPathsPetsGet };
var ImportExternalApiSpecificationRequestBodyInputPathsPets = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInputPathsPets, _super);
    function ImportExternalApiSpecificationRequestBodyInputPathsPets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=get" }),
        __metadata("design:type", ImportExternalApiSpecificationRequestBodyInputPathsPetsGet)
    ], ImportExternalApiSpecificationRequestBodyInputPathsPets.prototype, "get", void 0);
    return ImportExternalApiSpecificationRequestBodyInputPathsPets;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInputPathsPets };
var ImportExternalApiSpecificationRequestBodyInputPaths = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInputPaths, _super);
    function ImportExternalApiSpecificationRequestBodyInputPaths() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=/pets" }),
        __metadata("design:type", ImportExternalApiSpecificationRequestBodyInputPathsPets)
    ], ImportExternalApiSpecificationRequestBodyInputPaths.prototype, "rootPets", void 0);
    return ImportExternalApiSpecificationRequestBodyInputPaths;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInputPaths };
var ImportExternalApiSpecificationRequestBodyInputServers = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInputServers, _super);
    function ImportExternalApiSpecificationRequestBodyInputServers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBodyInputServers.prototype, "url", void 0);
    return ImportExternalApiSpecificationRequestBodyInputServers;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInputServers };
var ImportExternalApiSpecificationRequestBodyInput = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBodyInput, _super);
    function ImportExternalApiSpecificationRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=info" }),
        __metadata("design:type", ImportExternalApiSpecificationRequestBodyInputInfo)
    ], ImportExternalApiSpecificationRequestBodyInput.prototype, "info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openapi" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBodyInput.prototype, "openapi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paths" }),
        __metadata("design:type", ImportExternalApiSpecificationRequestBodyInputPaths)
    ], ImportExternalApiSpecificationRequestBodyInput.prototype, "paths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servers", elemType: ImportExternalApiSpecificationRequestBodyInputServers }),
        __metadata("design:type", Array)
    ], ImportExternalApiSpecificationRequestBodyInput.prototype, "servers", void 0);
    return ImportExternalApiSpecificationRequestBodyInput;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBodyInput };
var ImportExternalApiSpecificationRequestBody = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequestBody, _super);
    function ImportExternalApiSpecificationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=input" }),
        __metadata("design:type", ImportExternalApiSpecificationRequestBodyInput)
    ], ImportExternalApiSpecificationRequestBody.prototype, "input", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationRequestBody.prototype, "type", void 0);
    return ImportExternalApiSpecificationRequestBody;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequestBody };
var ImportExternalApiSpecification200ApplicationJsonCollections = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecification200ApplicationJsonCollections, _super);
    function ImportExternalApiSpecification200ApplicationJsonCollections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecification200ApplicationJsonCollections.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecification200ApplicationJsonCollections.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecification200ApplicationJsonCollections.prototype, "uid", void 0);
    return ImportExternalApiSpecification200ApplicationJsonCollections;
}(SpeakeasyBase));
export { ImportExternalApiSpecification200ApplicationJsonCollections };
var ImportExternalApiSpecification200ApplicationJson = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecification200ApplicationJson, _super);
    function ImportExternalApiSpecification200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collections", elemType: ImportExternalApiSpecification200ApplicationJsonCollections }),
        __metadata("design:type", Array)
    ], ImportExternalApiSpecification200ApplicationJson.prototype, "collections", void 0);
    return ImportExternalApiSpecification200ApplicationJson;
}(SpeakeasyBase));
export { ImportExternalApiSpecification200ApplicationJson };
var ImportExternalApiSpecification400ApplicationJsonErrorDetails = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecification400ApplicationJsonErrorDetails, _super);
    function ImportExternalApiSpecification400ApplicationJsonErrorDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=param" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecification400ApplicationJsonErrorDetails.prototype, "param", void 0);
    return ImportExternalApiSpecification400ApplicationJsonErrorDetails;
}(SpeakeasyBase));
export { ImportExternalApiSpecification400ApplicationJsonErrorDetails };
var ImportExternalApiSpecification400ApplicationJsonError = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecification400ApplicationJsonError, _super);
    function ImportExternalApiSpecification400ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", ImportExternalApiSpecification400ApplicationJsonErrorDetails)
    ], ImportExternalApiSpecification400ApplicationJsonError.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecification400ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImportExternalApiSpecification400ApplicationJsonError.prototype, "name", void 0);
    return ImportExternalApiSpecification400ApplicationJsonError;
}(SpeakeasyBase));
export { ImportExternalApiSpecification400ApplicationJsonError };
var ImportExternalApiSpecification400ApplicationJson = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecification400ApplicationJson, _super);
    function ImportExternalApiSpecification400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", ImportExternalApiSpecification400ApplicationJsonError)
    ], ImportExternalApiSpecification400ApplicationJson.prototype, "error", void 0);
    return ImportExternalApiSpecification400ApplicationJson;
}(SpeakeasyBase));
export { ImportExternalApiSpecification400ApplicationJson };
var ImportExternalApiSpecificationRequest = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationRequest, _super);
    function ImportExternalApiSpecificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ImportExternalApiSpecificationRequestBody)
    ], ImportExternalApiSpecificationRequest.prototype, "request", void 0);
    return ImportExternalApiSpecificationRequest;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationRequest };
var ImportExternalApiSpecificationResponse = /** @class */ (function (_super) {
    __extends(ImportExternalApiSpecificationResponse, _super);
    function ImportExternalApiSpecificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ImportExternalApiSpecificationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ImportExternalApiSpecificationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImportExternalApiSpecification200ApplicationJson)
    ], ImportExternalApiSpecificationResponse.prototype, "importExternalApiSpecification200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImportExternalApiSpecification400ApplicationJson)
    ], ImportExternalApiSpecificationResponse.prototype, "importExternalApiSpecification400ApplicationJsonObject", void 0);
    return ImportExternalApiSpecificationResponse;
}(SpeakeasyBase));
export { ImportExternalApiSpecificationResponse };
