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
import * as shared from "../shared";
var CreateArtifactVersionPathParams = /** @class */ (function (_super) {
    __extends(CreateArtifactVersionPathParams, _super);
    function CreateArtifactVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" }),
        __metadata("design:type", String)
    ], CreateArtifactVersionPathParams.prototype, "artifactId", void 0);
    return CreateArtifactVersionPathParams;
}(SpeakeasyBase));
export { CreateArtifactVersionPathParams };
export var CreateArtifactVersionXRegistryArtifactTypeEnum;
(function (CreateArtifactVersionXRegistryArtifactTypeEnum) {
    CreateArtifactVersionXRegistryArtifactTypeEnum["Avro"] = "AVRO";
    CreateArtifactVersionXRegistryArtifactTypeEnum["Protobuf"] = "PROTOBUF";
    CreateArtifactVersionXRegistryArtifactTypeEnum["ProtobufFd"] = "PROTOBUF_FD";
    CreateArtifactVersionXRegistryArtifactTypeEnum["Json"] = "JSON";
    CreateArtifactVersionXRegistryArtifactTypeEnum["Openapi"] = "OPENAPI";
    CreateArtifactVersionXRegistryArtifactTypeEnum["Asyncapi"] = "ASYNCAPI";
    CreateArtifactVersionXRegistryArtifactTypeEnum["Graphql"] = "GRAPHQL";
    CreateArtifactVersionXRegistryArtifactTypeEnum["Kconnect"] = "KCONNECT";
    CreateArtifactVersionXRegistryArtifactTypeEnum["Wsdl"] = "WSDL";
    CreateArtifactVersionXRegistryArtifactTypeEnum["Xsd"] = "XSD";
    CreateArtifactVersionXRegistryArtifactTypeEnum["Xml"] = "XML";
})(CreateArtifactVersionXRegistryArtifactTypeEnum || (CreateArtifactVersionXRegistryArtifactTypeEnum = {}));
var CreateArtifactVersionHeaders = /** @class */ (function (_super) {
    __extends(CreateArtifactVersionHeaders, _super);
    function CreateArtifactVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Registry-ArtifactType" }),
        __metadata("design:type", String)
    ], CreateArtifactVersionHeaders.prototype, "xRegistryArtifactType", void 0);
    return CreateArtifactVersionHeaders;
}(SpeakeasyBase));
export { CreateArtifactVersionHeaders };
var CreateArtifactVersionRequest = /** @class */ (function (_super) {
    __extends(CreateArtifactVersionRequest, _super);
    function CreateArtifactVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateArtifactVersionPathParams)
    ], CreateArtifactVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateArtifactVersionHeaders)
    ], CreateArtifactVersionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=*/*" }),
        __metadata("design:type", Uint8Array)
    ], CreateArtifactVersionRequest.prototype, "request", void 0);
    return CreateArtifactVersionRequest;
}(SpeakeasyBase));
export { CreateArtifactVersionRequest };
var CreateArtifactVersionResponse = /** @class */ (function (_super) {
    __extends(CreateArtifactVersionResponse, _super);
    function CreateArtifactVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateArtifactVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], CreateArtifactVersionResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateArtifactVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VersionMetaData)
    ], CreateArtifactVersionResponse.prototype, "versionMetaData", void 0);
    return CreateArtifactVersionResponse;
}(SpeakeasyBase));
export { CreateArtifactVersionResponse };
