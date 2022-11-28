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
export var BatchRequestActionMethodEnum;
(function (BatchRequestActionMethodEnum) {
    BatchRequestActionMethodEnum["Get"] = "get";
    BatchRequestActionMethodEnum["Post"] = "post";
    BatchRequestActionMethodEnum["Put"] = "put";
    BatchRequestActionMethodEnum["Delete"] = "delete";
    BatchRequestActionMethodEnum["Patch"] = "patch";
    BatchRequestActionMethodEnum["Head"] = "head";
})(BatchRequestActionMethodEnum || (BatchRequestActionMethodEnum = {}));
// BatchRequestActionOptions
/**
 * Pagination (`limit` and `offset`) and output options (`fields` or `expand`) for the action. “Pretty” JSON output is not an available option on individual actions; if you want pretty output, specify that option on the parent request.
**/
var BatchRequestActionOptions = /** @class */ (function (_super) {
    __extends(BatchRequestActionOptions, _super);
    function BatchRequestActionOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields" }),
        __metadata("design:type", Array)
    ], BatchRequestActionOptions.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], BatchRequestActionOptions.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], BatchRequestActionOptions.prototype, "offset", void 0);
    return BatchRequestActionOptions;
}(SpeakeasyBase));
export { BatchRequestActionOptions };
// BatchRequestAction
/**
 * An action object for use in a batch request.
**/
var BatchRequestAction = /** @class */ (function (_super) {
    __extends(BatchRequestAction, _super);
    function BatchRequestAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], BatchRequestAction.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], BatchRequestAction.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", BatchRequestActionOptions)
    ], BatchRequestAction.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relative_path" }),
        __metadata("design:type", String)
    ], BatchRequestAction.prototype, "relativePath", void 0);
    return BatchRequestAction;
}(SpeakeasyBase));
export { BatchRequestAction };
