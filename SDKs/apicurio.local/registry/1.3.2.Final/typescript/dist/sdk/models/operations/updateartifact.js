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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var UpdateArtifactPathParams = /** @class */ (function (_super) {
    __extends(UpdateArtifactPathParams, _super);
    function UpdateArtifactPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" }),
        __metadata("design:type", String)
    ], UpdateArtifactPathParams.prototype, "artifactId", void 0);
    return UpdateArtifactPathParams;
}(SpeakeasyBase));
export { UpdateArtifactPathParams };
export var UpdateArtifactXRegistryArtifactTypeEnum;
(function (UpdateArtifactXRegistryArtifactTypeEnum) {
    UpdateArtifactXRegistryArtifactTypeEnum["Avro"] = "AVRO";
    UpdateArtifactXRegistryArtifactTypeEnum["Protobuf"] = "PROTOBUF";
    UpdateArtifactXRegistryArtifactTypeEnum["ProtobufFd"] = "PROTOBUF_FD";
    UpdateArtifactXRegistryArtifactTypeEnum["Json"] = "JSON";
    UpdateArtifactXRegistryArtifactTypeEnum["Openapi"] = "OPENAPI";
    UpdateArtifactXRegistryArtifactTypeEnum["Asyncapi"] = "ASYNCAPI";
    UpdateArtifactXRegistryArtifactTypeEnum["Graphql"] = "GRAPHQL";
    UpdateArtifactXRegistryArtifactTypeEnum["Kconnect"] = "KCONNECT";
    UpdateArtifactXRegistryArtifactTypeEnum["Wsdl"] = "WSDL";
    UpdateArtifactXRegistryArtifactTypeEnum["Xsd"] = "XSD";
    UpdateArtifactXRegistryArtifactTypeEnum["Xml"] = "XML";
})(UpdateArtifactXRegistryArtifactTypeEnum || (UpdateArtifactXRegistryArtifactTypeEnum = {}));
var UpdateArtifactHeaders = /** @class */ (function (_super) {
    __extends(UpdateArtifactHeaders, _super);
    function UpdateArtifactHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Registry-ArtifactType" }),
        __metadata("design:type", String)
    ], UpdateArtifactHeaders.prototype, "xRegistryArtifactType", void 0);
    return UpdateArtifactHeaders;
}(SpeakeasyBase));
export { UpdateArtifactHeaders };
var UpdateArtifactRequest = /** @class */ (function (_super) {
    __extends(UpdateArtifactRequest, _super);
    function UpdateArtifactRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateArtifactPathParams)
    ], UpdateArtifactRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateArtifactHeaders)
    ], UpdateArtifactRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=*/*" }),
        __metadata("design:type", Uint8Array)
    ], UpdateArtifactRequest.prototype, "request", void 0);
    return UpdateArtifactRequest;
}(SpeakeasyBase));
export { UpdateArtifactRequest };
var UpdateArtifactResponse = /** @class */ (function (_super) {
    __extends(UpdateArtifactResponse, _super);
    function UpdateArtifactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ArtifactMetaData)
    ], UpdateArtifactResponse.prototype, "artifactMetaData", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateArtifactResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], UpdateArtifactResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateArtifactResponse.prototype, "statusCode", void 0);
    return UpdateArtifactResponse;
}(SpeakeasyBase));
export { UpdateArtifactResponse };
