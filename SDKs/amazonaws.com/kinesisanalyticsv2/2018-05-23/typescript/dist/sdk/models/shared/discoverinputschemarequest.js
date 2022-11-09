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
import { InputProcessingConfiguration } from "./inputprocessingconfiguration";
import { InputStartingPositionConfiguration } from "./inputstartingpositionconfiguration";
import { S3Configuration } from "./s3configuration";
var DiscoverInputSchemaRequest = /** @class */ (function (_super) {
    __extends(DiscoverInputSchemaRequest, _super);
    function DiscoverInputSchemaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=InputProcessingConfiguration" }),
        __metadata("design:type", InputProcessingConfiguration)
    ], DiscoverInputSchemaRequest.prototype, "inputProcessingConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=InputStartingPositionConfiguration" }),
        __metadata("design:type", InputStartingPositionConfiguration)
    ], DiscoverInputSchemaRequest.prototype, "inputStartingPositionConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=ResourceARN" }),
        __metadata("design:type", String)
    ], DiscoverInputSchemaRequest.prototype, "resourceArn", void 0);
    __decorate([
        Metadata({ data: "json, name=S3Configuration" }),
        __metadata("design:type", S3Configuration)
    ], DiscoverInputSchemaRequest.prototype, "s3Configuration", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceExecutionRole" }),
        __metadata("design:type", String)
    ], DiscoverInputSchemaRequest.prototype, "serviceExecutionRole", void 0);
    return DiscoverInputSchemaRequest;
}(SpeakeasyBase));
export { DiscoverInputSchemaRequest };
