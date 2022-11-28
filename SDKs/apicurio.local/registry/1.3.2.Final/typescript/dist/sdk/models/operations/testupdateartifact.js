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
var TestUpdateArtifactPathParams = /** @class */ (function (_super) {
    __extends(TestUpdateArtifactPathParams, _super);
    function TestUpdateArtifactPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" }),
        __metadata("design:type", String)
    ], TestUpdateArtifactPathParams.prototype, "artifactId", void 0);
    return TestUpdateArtifactPathParams;
}(SpeakeasyBase));
export { TestUpdateArtifactPathParams };
export var TestUpdateArtifactXRegistryArtifactTypeEnum;
(function (TestUpdateArtifactXRegistryArtifactTypeEnum) {
    TestUpdateArtifactXRegistryArtifactTypeEnum["Avro"] = "AVRO";
    TestUpdateArtifactXRegistryArtifactTypeEnum["Protobuf"] = "PROTOBUF";
    TestUpdateArtifactXRegistryArtifactTypeEnum["ProtobufFd"] = "PROTOBUF_FD";
    TestUpdateArtifactXRegistryArtifactTypeEnum["Json"] = "JSON";
    TestUpdateArtifactXRegistryArtifactTypeEnum["Openapi"] = "OPENAPI";
    TestUpdateArtifactXRegistryArtifactTypeEnum["Asyncapi"] = "ASYNCAPI";
    TestUpdateArtifactXRegistryArtifactTypeEnum["Graphql"] = "GRAPHQL";
    TestUpdateArtifactXRegistryArtifactTypeEnum["Kconnect"] = "KCONNECT";
    TestUpdateArtifactXRegistryArtifactTypeEnum["Wsdl"] = "WSDL";
    TestUpdateArtifactXRegistryArtifactTypeEnum["Xsd"] = "XSD";
    TestUpdateArtifactXRegistryArtifactTypeEnum["Xml"] = "XML";
})(TestUpdateArtifactXRegistryArtifactTypeEnum || (TestUpdateArtifactXRegistryArtifactTypeEnum = {}));
var TestUpdateArtifactHeaders = /** @class */ (function (_super) {
    __extends(TestUpdateArtifactHeaders, _super);
    function TestUpdateArtifactHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Registry-ArtifactType" }),
        __metadata("design:type", String)
    ], TestUpdateArtifactHeaders.prototype, "xRegistryArtifactType", void 0);
    return TestUpdateArtifactHeaders;
}(SpeakeasyBase));
export { TestUpdateArtifactHeaders };
var TestUpdateArtifactRequest = /** @class */ (function (_super) {
    __extends(TestUpdateArtifactRequest, _super);
    function TestUpdateArtifactRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestUpdateArtifactPathParams)
    ], TestUpdateArtifactRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestUpdateArtifactHeaders)
    ], TestUpdateArtifactRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=*/*" }),
        __metadata("design:type", Uint8Array)
    ], TestUpdateArtifactRequest.prototype, "request", void 0);
    return TestUpdateArtifactRequest;
}(SpeakeasyBase));
export { TestUpdateArtifactRequest };
var TestUpdateArtifactResponse = /** @class */ (function (_super) {
    __extends(TestUpdateArtifactResponse, _super);
    function TestUpdateArtifactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TestUpdateArtifactResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], TestUpdateArtifactResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TestUpdateArtifactResponse.prototype, "statusCode", void 0);
    return TestUpdateArtifactResponse;
}(SpeakeasyBase));
export { TestUpdateArtifactResponse };
