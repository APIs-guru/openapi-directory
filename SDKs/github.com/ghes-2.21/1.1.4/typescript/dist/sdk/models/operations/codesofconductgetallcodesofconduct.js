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
var CodesOfConductGetAllCodesOfConduct415ApplicationJson = /** @class */ (function (_super) {
    __extends(CodesOfConductGetAllCodesOfConduct415ApplicationJson, _super);
    function CodesOfConductGetAllCodesOfConduct415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], CodesOfConductGetAllCodesOfConduct415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CodesOfConductGetAllCodesOfConduct415ApplicationJson.prototype, "message", void 0);
    return CodesOfConductGetAllCodesOfConduct415ApplicationJson;
}(SpeakeasyBase));
export { CodesOfConductGetAllCodesOfConduct415ApplicationJson };
var CodesOfConductGetAllCodesOfConductResponse = /** @class */ (function (_super) {
    __extends(CodesOfConductGetAllCodesOfConductResponse, _super);
    function CodesOfConductGetAllCodesOfConductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CodesOfConductGetAllCodesOfConductResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CodesOfConductGetAllCodesOfConductResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.CodeOfConduct }),
        __metadata("design:type", Array)
    ], CodesOfConductGetAllCodesOfConductResponse.prototype, "codeOfConducts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodesOfConductGetAllCodesOfConduct415ApplicationJson)
    ], CodesOfConductGetAllCodesOfConductResponse.prototype, "codesOfConductGetAllCodesOfConduct415ApplicationJsonObject", void 0);
    return CodesOfConductGetAllCodesOfConductResponse;
}(SpeakeasyBase));
export { CodesOfConductGetAllCodesOfConductResponse };
